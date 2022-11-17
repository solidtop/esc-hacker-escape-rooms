export async function loadData() {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
    const data = await res.json();
    console.log(data.challenges);
    return data.challenges;
};
loadData();




/*const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/challenges');
const data = await res.json();
data.challenges.forEach(challenge => {
  console.log(challenge.title)
});


console.log(data.challenges);*/