import {
    getFirestore, collection, addDoc,doc, 
    updateDoc, deleteDoc, query, where, 
    onSnapshot, getDoc, serverTimestamp
} from 'firebase/firestore';



const db = getFirestore();
const recipesCollection = collection(db, 'Krusties');

export async function addRecipe(user, data) {
    if (!user || !user.uid) {
        throw new Error('Yo who the fuck are you? Dummy I dont trust you.');
    }

    const payload = {
        title: data.title || "",
        desctiption: data.description || '',
        ingredients: data.ingredients || [],
        steps: data.steps || [],
        tags: data.tags || [],
        ownerId: user.uid,
        ownerName: user.displayName ?? user.email ?? '',
        createdAt: serverTimestamp(),
        updatedAt: Date.now(),
        imageUrl: data.imageUrl ?? null,
        public: !!data.public,
    };

    const ref = await addDoc(recipesCollection, payload);
    return ref.id;
}

export async function updateRecipe(recipeId, updates) {
    const ref = doc(db, 'Krusties', recipeId);
    await updateDoc(ref,{
        ...updates,
        updateAt:serverTimestamp(),
    })
}

export async function deleteRecipe(recipeId) {
    const ref = doc(db, 'Krusties', recipeId);
    await deleteDoc(ref);
}

export function listenToUserRecipes(user, onUpdate){
    if (!user || !user.uid) {
        console.warn('I still dont know who you are, dummy.');
        onUpdate([]);
        return () => {};
    }

    const q = query(recipesCollection, where('ownerId', '==', user.uid));
    const unsubscribe = onSnapshot(
        q, 
        (querySnapshot) => {
            console.log('Recipes updated. Total: ', querySnapshot.size);
            const docs = querySnapshot.docs.map(doc => ({id: doc.id, ...doc.data() }));
            console.log("snapshot, ", docs);
            onUpdate(docs);
        }, (err) => {
            console.error('Error fetching user recipes: ', err);
            onUpdate([]);
        }
);

return unsubscribe;
}

export async function getRecipeOnce(id) {
    try {
        const recipeId = Array.isArray(id) ? id[0] : id;
        if(!recipeId|| typeof recipeId !== 'string'){
        console.warn('getRecipeOnce is an invalid id', id);
        }

        const ref = doc(db, 'Krusties', recipeId);
        const snapshot = await getDoc(ref);
        if(!snapshot.exists()) return null;
    
        return {id: snapshot.id, ...snapshot.data()};
    } catch (error) {
        console.error('Error fetching recipe: ', error);
        return null;
    }

}