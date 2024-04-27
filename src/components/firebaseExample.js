import { getDatabase, ref, get ,set} from "firebase/database";


export const readData = async (path) => {
  try {
    const db = getDatabase();
    const valueRef = ref(db, path);
    const snapshot = await get(valueRef);
    const value = snapshot.val();
    //console.log(value)
    return value;
  } catch (error) {
    console.error("Error reading value:", error);
    throw error; // Re-throw the error for proper handling
  }
  // console.log('Data read from test/float:', value);
};

export const writeData=async (path, value)=>{
  try {
    const db = getDatabase();
    const valueRef = ref(db, path);
    await set(valueRef, value);
    console.log("Value written successfully!");
  } catch (error) {
    console.error("Error writing value:", error);
    throw error; 
  }

}
