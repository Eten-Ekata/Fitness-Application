import { createContext, useState, useEffect } from "react";
import { exerciseOptions, fetchData } from '../utils/fetchData'

const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
    const [exercises, setExercises] = useState([])
    const[bodyPart, setBodyPart]=useState('all')
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])
    const [isPending, setIsPending] = useState(false)
    const [loading, setLoading] = useState(false)

    useEffect(()=>{
        const fetchExerciseData=async()=>{
            setIsPending(true)
          const bodyPartsData= await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)
          setIsPending(false)
          setBodyParts(['all', ...bodyPartsData]);
        }
        fetchExerciseData()
      },[])
      
      const handleSearch= async ()=>{
        if (search) {
          const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
    
          const searchedExercises = exercisesData.filter(
            (item) => item.name.toLowerCase().includes(search)
                   || item.target.toLowerCase().includes(search)
                   || item.equipment.toLowerCase().includes(search)
                   || item.bodyPart.toLowerCase().includes(search),
          );
          setSearch('')
          setExercises(searchedExercises)
        }
        }

  return (
        <FitnessContext.Provider
          value={{
            bodyPart,
            setBodyPart,
            exercises,
            setExercises,
            search,
            setSearch,
            bodyParts,
            setBodyParts,
            isPending,
            setIsPending,
            loading,
            setLoading,
            handleSearch
          
          }}
        >
          {children}
        </FitnessContext.Provider>
      );
}







export default FitnessContext;
