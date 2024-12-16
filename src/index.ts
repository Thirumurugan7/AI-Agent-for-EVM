import OpenAI from "openai"
import { createAssistant } from "./openai/createAssistant";
import { createThread } from "./openai/createThread";
import { createRun } from "./openai/createRun";
import { performRun } from "./openai/performRun";


async function main() {

    const client = new OpenAI()

const message = " hello bhai"

console.log("step 1, creating an assistant");

    const assistant = await createAssistant(client)
    console.log("step 2, creating an thread");

    const thread = await createThread(client,message)
    console.log("runnnig");

    const run = await createRun(client,thread,assistant.id)


    const result = await performRun(run, client,thread);
    console.log("result",result);

    
}

main()