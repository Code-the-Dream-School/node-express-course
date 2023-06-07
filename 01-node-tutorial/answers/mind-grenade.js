function show_time() {
  const d = new Date();
  let hour = d.getHours();
  let min = d.getMinutes();
  console.log(`${hour}:${min}`)
}

show_time()