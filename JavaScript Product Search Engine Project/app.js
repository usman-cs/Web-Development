const search = () => {
  const searchBox = document.getElementById('search-item').value.toUpperCase()
  const product = document.querySelectorAll('.product')
  const pname = document.getElementsByTagName('h2')
  for (let i = 0; i < pname.length; i++) {
    let match = product[i].getElementsByTagName('h2')[0]
    if (match) {
      let textvlaue = match.textContent
      if (textvlaue.toUpperCase().indexOf(searchBox) > -1) {
        product[i].style.display = ''
      } else {
        product[i].style.display = 'none'
      }
    }
  }
}
