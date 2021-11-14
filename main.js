const LinksSocialMedia = {
  github: 'Dieg0ol',
  youtube: 'channel/UCTpV7m68xjylOSMLdVQ-cdg',
  facebook: 'diego.alvez.50552',
  twitter: 'DiegoACDS',
  instagram: 'dede2040dr'
}
function changeSocialMedia() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
    //userName.textContent = 'CABULOSO' isso muda o elemento pelo ID
  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url) //ele está pegando o conteúdo do url.
    .then(response => response.json())
    //aqui assim que o fetch pega o conteudo do url ele guarda e transforma em .Json
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}
getGitHubProfileInfos()
