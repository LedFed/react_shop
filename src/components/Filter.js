import React, { useRef } from "react";

export function Filter({ searchValue, setValue, Btn, mas }) {

  const inputRef = useRef(null);

  if (Btn) {
    inputRef.current.focus();
  }

  return (
    <input type="text" className="search" id="inpit" ref={inputRef} value={searchValue} 
      placeholder="Поиск" autocomplete="off" onChange={(event) => setValue(event.target.value)}></input>
  )

}

export default Filter