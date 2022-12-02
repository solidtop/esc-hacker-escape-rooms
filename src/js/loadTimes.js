export default async function loadTimes(challengeID, selectedDate) {
    const res = await fetch('https://lernia-sjj-assignments.vercel.app/api/booking/available-times?date=' + selectedDate + '&challenge='+ challengeID);
    const data = await res.json();
    return data;
};



