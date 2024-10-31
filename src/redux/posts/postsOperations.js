import { collection, addDoc, getDocs, doc, updateDoc } from "firebase/firestore";
import { db } from "./config";


// Приклад запису в базу:
const writeDataToFirestore = async () => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      first: "Ada",
      last: "Lovelace",
      born: 1815,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};

// Приклад отримання даних із бази:
const getDataFromFirestore = async () => {
    try {
      const snapshot = await getDocs(collection(db, 'users'));
			// Перевіряємо у консолі отримані дані
      snapshot.forEach((doc) => console.log(`${doc.id} =>`, doc.data()));
			// Повертаємо масив обʼєктів у довільній формі
			return snapshot.map((doc) => ({ id: doc.id, data: doc.data() });
    } catch (error) {
      console.log(error);
			throw error;
    }
  };

// Приклад оновлення даних у базі:
const updateDataInFirestore = async (collectionName, docId) => {
    try {
      const ref = doc(db, collectionName, docId);

			await updateDoc(ref, {
			  age: 25
			});
      console.log("document updated");
    } catch (error) {
      console.log(error);
    }
  };
