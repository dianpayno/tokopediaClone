import Label from "../Input/Label"

type SelectBoxElementprops ={
    dataKota:{
        id:number,
        province_id:number,
        name:string,
    }[],
    selectedKota:string
    getKota:(event: React.ChangeEvent<HTMLSelectElement>) => void
}
const SelectBoxElementKota = (props:SelectBoxElementprops) => {
    const { selectedKota, getKota, dataKota} = props

    return (
        <div>
            <Label text="kota/kabupaten"/>
            <select name="" id="" value={selectedKota} onChange={getKota}
                className={`outline outline-gray-200 text-sm capitalize focus:outline-green-600 w-full px-2 py-1 rounded mb-4`}>
                       <option value=""></option>
                    {dataKota.map((item)=>{
                        return (
                                <option key={item.id} className="px-2 py-1 capitalize" value={item.id}> {item.name}</option>            
                        )}) 
                    }
                </select>
                 
              
            </div>
          )
  
}

export default SelectBoxElementKota