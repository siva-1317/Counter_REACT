import React, { useState } from 'react'

function Theme() {
    const [isDark, setisDark] = useState(false);
    const theme = () =>{
        setisDark(!isDark);
    }

    const ChangeTheme ={
        backgroundColor: isDark ? '#3d3d3dff' : '#ecececff',
        minHeight:'100vh',
        color: isDark ? '#ffffffff' :'#000000ff',
        textAlign:'center',
        fontWeight:'500'
    }
    const Btn = {
      color: isDark ? '#ffffffff' :'#000000ff',
      backgroundColor: isDark ? '#fbdd7cff' : '#ff4d4dff',
      padding:'10px',
      borderRadius:'20px'
    }

  return (
    <div style={ChangeTheme}>
        <h1>This is {isDark ? 'Dark' : 'Light'} theme</h1>
        <button onClick={theme} style={Btn}>Change Theme</button>
    </div>
  )
}

export default Theme