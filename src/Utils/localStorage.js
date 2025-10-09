export const loadInstalled = () => {
  try {
    const data = localStorage.getItem('installed')
    return data ? JSON.parse(data) : []
  } catch (err) {
    console.log(err)
    return []
  }
}

export const updateList = application => {
  const installed = loadInstalled()
  try {
    const isDuplicate = installed.some(a => a.id === application.id)
    if (isDuplicate) return 
    const updatedInstalled = [...installed, application]
    localStorage.setItem('installed', JSON.stringify(updatedInstalled))
  } catch (err) {
    console.log(err)
  }
}

export const removeFromInstalled = id => {
  const installed = loadInstalled()
  try {
    const updatedInstalled = installed.filter(a => a.id !== id)
    localStorage.setItem('installed', JSON.stringify(updatedInstalled))
  } catch (err) {
    console.log(err)
  }
}