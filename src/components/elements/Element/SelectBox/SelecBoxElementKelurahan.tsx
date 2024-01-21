import Label from "../Input/Label"


type SelectBoxElementprops ={
    dataKelurahan:{
        id:number,
        regency_id:number,
        name:string,
    }[],
    selectedKelurahan:string
    getKelurahan:(event: React.ChangeEvent<HTMLSelectElement>) => void
}
const SelectBoxElementKelurahan = (props:SelectBoxElementprops) => {
    const { selectedKelurahan, getKelurahan, dataKelurahan} = props

    return (
        <div>
            <Label text="kelurahan"/>
            <select name="" id="" value={selectedKelurahan} onChange={getKelurahan}
                className={`outline outline-gray-200 text-sm capitalize focus:outline-green-600 w-full px-2 py-1 rounded mb-4`}>
                       <option value=""></option>
                    {dataKelurahan.map((item)=>{
                        return (
                                <option key={item.id} className="px-2 py-1 capitalize" value={item.id}> {item.name}</option>            
                        )}) 
                    }
                </select>
                 
              
            </div>
          )
  
}

export default SelectBoxElementKelurahan
