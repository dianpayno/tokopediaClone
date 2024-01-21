import Label from "../Input/Label"


type SelectBoxElementprops ={
    dataKecamatan:{
        id:number,
        regency_id:number,
        name:string,
    }[],
    selectedKecamatan:string
    getKecamatan:(event: React.ChangeEvent<HTMLSelectElement>) => void
}
const SelectBoxElementKecamatan = (props:SelectBoxElementprops) => {
    const { selectedKecamatan, getKecamatan, dataKecamatan} = props

    return (
        <div>
            <Label text="kecamatan"/>
            <select name="" id="" value={selectedKecamatan} onChange={getKecamatan}
                className={`outline outline-gray-200 text-sm capitalize focus:outline-green-600 w-full px-2 py-1 rounded mb-4`}>
                       <option value=""></option>
                    {dataKecamatan.map((item)=>{
                        return (
                                <option key={item.id} className="px-2 py-1 capitalize" value={item.id}> {item.name}</option>            
                        )}) 
                    }
                </select>
                 
              
            </div>
          )
  
}

export default SelectBoxElementKecamatan