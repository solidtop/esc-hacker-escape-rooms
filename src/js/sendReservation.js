export default async function reserveTime(availableTimes) {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        challenge: data.id,
        name: "Customer Name",
        email: "name@example.com",
        date: "2022-12-12",
        time: "18:30",
        participants: 5,
    }),
});

const data = await res.json();
console.log(data);
}