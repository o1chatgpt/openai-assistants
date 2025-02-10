export let assistantId = "asst_3vNPInngANBlqz2enIYpmqka"; // set your assistant ID here

if (assistantId === "") {
  assistantId = process.env.OPENAI_ASSISTANT_ID;
}
