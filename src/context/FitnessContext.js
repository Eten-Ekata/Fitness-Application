import { createContext, useState, useEffect } from "react";
import { exerciseOptions, fetchData } from '../utils/fetchData'
import {Oval} from 'react-loader-spinner'


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
            setLoading
          
          }}
        >
          {children}
        </FitnessContext.Provider>
      );
}







export default FitnessContext;
