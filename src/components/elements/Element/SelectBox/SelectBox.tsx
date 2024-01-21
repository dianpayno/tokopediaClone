
import {useState, useEffect} from 'react'
import axios from 'axios'
import SelectBoxElementKota from './SelectBoxElementKota'
import SelectBoxElementProvinsi from './SelecBoxElementProvinsi'
import SelectBoxElementKecamatan from './SelectBoxKecamatan'
import SelectBoxElementKelurahan from './SelecBoxElementKelurahan'

const SelectBox:React.FC =() => {
    const [provinsi, setProvinsi] = useState([])
    const [kota, setKota] = useState([])
    const [kecamatan, setKecamatan] = useState([])
    const [kelurahan, setKelurahan]=useState([])

    
    const [selectedProvinsi, setSelectedProvinsi] = useState<string>("")
    const [selectedKota, setSelectedkota] = useState<string>("")
    const [selectedKecamatan, setSelectedKecamatan] = useState<string>("")
    const [selectedKelurahan, setSelectedKelurahan] = useState<string>("")

useEffect(()=>{
    const getProvinces = async()=>{
    try {
        const res = await axios.get("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
        setProvinsi(res.data)
    }
    catch (error) {
        console.log(error)
    }
    }
getProvinces()
},[])

useEffect(()=>{
    const getCity = async()=>{
    try {
        const res = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${selectedProvinsi}.json`)
        setKota(res.data)
    }
    catch (error) {
        console.log(error)
    }
    }
    getCity()
}, [selectedProvinsi])

useEffect(()=>{
    const getKecamatan = async()=>{
    try {
        const res = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${selectedKota}.json`)
        setKecamatan(res.data)
    }
    catch (error) {
        console.log(error)
    }
    }
    getKecamatan()
    },[selectedKota])

 useEffect(()=>{
        const getKelurahan = async()=>{
        try {
            const res = await axios.get(`https://www.emsifa.com/api-wilayah-indonesia/api/villages/${selectedKecamatan}.json`)
            setKelurahan(res.data)
        }
        catch (error) {
            console.log(error)
        }
        }
        getKelurahan()
 },[selectedKecamatan])
       

        const getProvinsi = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedProvinsi(event.target.value)
           
        }
        const getKota = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedkota(event.target.value)
        }
    
        const getKecamatan = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedKecamatan(event.target.value)
        }
    
        const getKelurahan = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setSelectedKelurahan(event.target.value)
        }

  return (
    <div>
         <SelectBoxElementProvinsi selectedProvinsi={selectedProvinsi} getProvinsi={getProvinsi} dataProvinsi={provinsi}/>
        { selectedProvinsi && <SelectBoxElementKota selectedKota={selectedKota} getKota={getKota} dataKota={kota}/>}
        { selectedKota && <SelectBoxElementKecamatan selectedKecamatan={selectedKecamatan} getKecamatan={getKecamatan} dataKecamatan={kecamatan}/>}
        { selectedKecamatan && <SelectBoxElementKelurahan selectedKelurahan={selectedKelurahan} getKelurahan={getKelurahan} dataKelurahan={kelurahan}/>}
    </div>
  )
}

export default SelectBox






