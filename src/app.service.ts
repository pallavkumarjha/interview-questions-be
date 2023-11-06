import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';

const openai = new OpenAI({ apiKey: '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' });
//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

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  async getJobDescriptionPrompt() {
    const completion = await openai.chat.completions.create({
      messages: [
        { "role": "user", "content": "React job 3 years" }
      ],
      model: "gpt-3.5-turbo",
    });
    const responseMessages = completion.choices.map(choice => choice.message.content);
    return responseMessages;
  }
}
