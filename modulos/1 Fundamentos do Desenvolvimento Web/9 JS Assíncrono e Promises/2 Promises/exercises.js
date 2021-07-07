const promise = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    const n = Math.ceil(Math.random()*50)
    arr.push(n**2)
  }
  const ret = arr.reduce((acc, cur) => acc + cur);

  if (ret < 8000) {
    return resolve(ret)
  }
  reject(ret)
})
.then((r) => {
  // console.log(`Promise resolvida. O número foi ${r}`)
  return [r/2, r/3, r/5, r/10];
})
.then((r) => console.log(r.reduce((acc, cur) => acc + cur)))
.catch((r) => console.log(`É mais de oito mil! Essa promise deve estar quebrada!`));