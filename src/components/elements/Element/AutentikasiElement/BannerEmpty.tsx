 type textlabel ={
     label?:string
 }
 const BannerEmpty = (props:textlabel) => {
    const {label} = props
    return (
      <div>
        <p className="font-base text-xs text-red-700 text-start mb-3">{label}</p>
      </div>
    )
  }

  export default BannerEmpty