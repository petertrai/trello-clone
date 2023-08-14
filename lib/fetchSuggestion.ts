// import formatTodosForAI from "./formatTodosForAI";

// const fetchSuggestion = async (board: Board) => {
//     const todos = formatTodosForAI(board);
//     console.log('FORMATTED TODOS to Send', todos);

//     const res = await fetch("/api/generateSummary", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
//         },
//         body: JSON.stringify({ todos }),
//     });

//     console.log('res', res)
//     console.log('res.json', res.json())
//     console.log('await res.json', await res.json());
//     const GPTdata = await res.json();
//     const { content } = GPTdata;

//     return content;
// }

// export default fetchSuggestion;

// headless ui fully accessible with keys / enter  and tab escape 