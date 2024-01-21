import Label from "../Input/Label"

type SelectBoxElementprops ={
    dataProvinsi:{
        id:number,
        name:string,
    }[],
    selectedProvinsi:string
    getProvinsi:(event: React.ChangeEvent<HTMLSelectElement>) => void
}
const SelectBoxElementProvinsi = (props:SelectBoxElementprops) => {
    const { selectedProvinsi, getProvinsi, dataProvinsi } = props

    return (
        <div>
            <Label text="provinsi"/>
            <select name="" id="" value={selectedProvinsi} onChange={getProvinsi}
                className={`outline outline-gray-200 text-sm capitalize focus:outline-green-600 w-full px-2 py-1 rounded mb-4`}>
                       <option value=""></option>
                    {dataProvinsi.map((item)=>{
                        return (
                                <option key={item.id} className="px-2 py-1 capitalize" value={item.id}> {item.name}</option>            
                        )}) 
                    }
                </select>
                 
              
            </div>
          )
  
}

export default SelectBoxElementProvinsi