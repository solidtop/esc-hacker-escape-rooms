export default async function reserveTime(challengeID, requestedName, requestedEmail, requestedDate, requestedTime, requestedParticipants) {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/reservations', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        challenge: challengeID,
        name: requestedName,
        email: requestedEmail,
        date: requestedDate,
        time: requestedTime,
        participants: requestedParticipants,
    }),
});

const data = await res.json();
console.log(data);
}