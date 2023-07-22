const BotonClear = (props) => {
  return (
    <div className='mt-2 rounded-xl font-bold h-16 text-3xl flex flex-1 bg-red-800 justify-center items-center text-white border-2 cursor-pointer hover:bg-red-500 select-none'
    onClick={props.manejarClear}
    >
      Clear
    </div>
  )
}

export default BotonClear;