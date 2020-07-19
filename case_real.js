let getTotalUsers = (data) => {
    console.log(data.total_count)
}
let clickFunc = () => {
    $.get('https://api.github.com/search/users?q=peter+repos:%3E42+followers:%3E1000',getTotalUsers)

    console.log('xong roi nha....')
}

$('#clickHere').click(clickFunc)