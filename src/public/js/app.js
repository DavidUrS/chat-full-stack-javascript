const $socket = io()
// Elementos del DOM
const $messageForm = $('#message-form')
const $messageInput = $('#message')
const $chat = $('#chat')

$messageForm.submit(e=>{
    e.preventDefault();
    $socket.emit('send message', $messageInput.val())
    $messageInput.val('');
})

$socket.on('new message', data=>{
    $chat.append(data + '<br/>');
})