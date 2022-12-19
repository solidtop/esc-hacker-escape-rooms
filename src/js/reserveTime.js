export default async function reserveTime(
    challengeId,
    requestedName,
    requestedEmail,
    requestedPhone,
    requestedDate,
    requestedTime,
    requestedParticipants
) {
    const res = await fetch(
        "https://lernia-sjj-assignments.vercel.app/api/booking/reservations",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                challenge: challengeId,
                name: requestedName,
                email: requestedEmail,
                phone: requestedPhone,
                date: requestedDate,
                time: requestedTime,
                participants: requestedParticipants,
            }),
        }
    );

    const data = await res.json();
    console.log(data);
}
