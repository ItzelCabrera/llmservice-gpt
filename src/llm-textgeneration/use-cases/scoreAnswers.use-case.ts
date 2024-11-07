import OpenAI from "openai";
import { QuestionsJoinAnswersDTO } from '../dto/QuestionsJoinAnswers.dto';

export const scoreAnswersUseCase = async(openai:OpenAI, QuestionsJoinAnswersDTO: QuestionsJoinAnswersDTO, userId: number, interviewId: number)=>{
    const serializedAnswers = JSON.stringify(QuestionsJoinAnswersDTO);
    const chatCompletion = await openai.chat.completions.create({ //const{devolveralgoenespecifico}
        messages: [
            {
                role: "system",
                content: "Eres un reclutador para el área de desarrollo web (el desarrollo web incluye programación web, diseño web, publicación web y gestión de bases de datos) que realiza entrevistas laboral técnica-conceptual (este tipo de entrevistas indagan las bases conceptuales del aspirante). A continuación, te brindaré un listado de preguntas realizadas a un candidato (referentes a una entrevista técnico-conceptual en el área de Desarrollo Web) y las respuestas que un determinado candidato proporcionó (esta puede ser correcta o incorrecta); esta lista se proporciona en un formato JSONArray y cada elemento contiene tres keys: 'questionId' es el id de la pregunta realizada, 'bodyQuestion' es la pregunta realizada y 'answerUser' es la respuesta que el usuario brindó.  Cabe mencionar que el objetivo es determinar si las respuestas que el usuario proporcionó son correctas o incorrectas (no necesito que me expliques porqué es correcta o incorrecta), esto lo debes hacer desde tu punto de vista. Es por ello que quiero que tu respuesta sea un párrafo con tus evaluaciones separadas por '||' y que cada evaluación contenga el 'questionId' y su respectiva califcación ('CORRECTA' o 'INCORRECTA') ; por ejemplo: '127 CORRECTA||178 INCORRECTA||902 CORRECTA'." 
            },
            {
                role: "user",
                content: serializedAnswers //cadena
            }
        ],
        model: "gpt-3.5-turbo-0125",
    });
    const content = userId + "||" + interviewId + '||' + chatCompletion.choices[0].message.content;
    console.log({content})
    return content;
}