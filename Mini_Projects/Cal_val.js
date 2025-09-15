const form = document.querySelector('form')
form.addEventListener("submit" , (e)=>{
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value)
  const weight = parseInt(document.querySelector('#weight').value)

  const res = document.querySelector('#results')

  if(height<=0 || isNaN(height) )
  res.innerHTML = "Enter valid Height"
  else if(weight<=0 || isNaN(weight))
  res.innerHTML = "Enter valid Weight"
  else {
    const bmi = (weight / ((height*height)/10000)).toFixed(2)

    res.innerHTML = `<span>${bmi}</span>`

    if(bmi<18.6)
    res.innerHTML = `<span>Under Weight</span>`
    
    if(bmi>18.6 && bmi<24.9)
    res.innerHTML = `<span>Normal Weight</span>`

    if(bmi>24.9)
    res.innerHTML = `<span>Over Weight</span>`
  }

} )