import React, {useEffect}from 'react'; 
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import petOperations from '../../redux/thunks'
import TEST_DATA from "../../test/test-data";
import {
    PersonOutline,
    PetsOutlined,
    LocationOn,
    PunchClockOutlined,
    TransgenderOutlined,
} from '@mui/icons-material';
import PetListItem from '../../components/pet-list-item';
import { useDispatch, useSelector } from 'react-redux';

export default function PetList() {
    const dispatch = useDispatch()
    const isLoadingPet = useSelector(state => state.petList.loading)
    const {getPetsList} = petOperations

    useEffect(() => {
        dispatch(getPetsList)
    }, [])

    if (isLoadingPet) {
          return <p>Loading...</p>
    }    

    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <List>
                {TEST_DATA.map((item, id)=>(
                        <PetListItem
                            key={item.id}
                            id={item.id}
                            petType={item.animal}
                            petFieldData={[
                                {icon: <PersonOutline />, data: item.name},
                                {icon: <PetsOutlined />, data: item.breed},
                                {icon: <LocationOn />, data: item.location},
                                {icon: <PunchClockOutlined />, data: item.age},
                                {icon: <TransgenderOutlined />, data: item.sex}
                            ]}
                        />
                ))}
            </List>
        </Box>
    );
};