// log
console.log(`${args[0]}/api/generate`);
console.log(`${args[1]}`);

// build
const requestData = {
  "prompt": `${args[1]}`,
  "make_instrumental": false,
  "wait_audio": false
}

// log
console.log(requestData)

// request
const sunoGen = Functions.makeHttpRequest({
  url: `${args[0]}/api/generate`,
  method: 'POST',
  headers: { "Content-Type": 'application/json' },
  data: requestData,
  timeout: 20000
})

// response
const [sunoGenResponse] = await Promise.all([sunoGen]);
console.log(sunoGenResponse);

// check
if (!sunoGenResponse.error) {
  const id = sunoGenResponse.data[0]['id'];  
  return Functions.encodeString(id);
}

return Functions.encodeString('Error')
