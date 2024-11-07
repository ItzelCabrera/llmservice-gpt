import OpenAI from "openai";

import { CVFieldsDTO } from './../dto/CVFields.dto';

export const generateQuestionsUseCase = async(openai:OpenAI,message:any)=>{ //CVFieldsDTO: CVFieldsDTO, cvId: number
    //const serializedFields = JSON.stringify(CVFieldsDTO);
    const jsonData = JSON.parse(message.value);
    console.log(jsonData.cvId)
    console.log(jsonData.cvFieldsDTOs)
    /*const chatCompletion = await openai.chat.completions.create({ //const{devolveralgoenespecifico}
        messages: [
            {
                role: "system",
                content: "Eres un reclutador para el área de desarrollo web (el desarrollo web incluye programación web, diseño web, publicación web y gestión de bases de datos) que realiza entrevistas laboral técnica-conceptual (este tipo de entrevistas indagan las bases conceptuales del aspirante). A continuación, te proporcionaré una lista de tecnologías y/o herramientas tecnológicas que el candidato conoce; esta lista se proporciona en un formato JSONArray y cada elemento contiene tres keys: 'field' es el nombre de la tecnología y/o herramienta tecnológica, 'level' es el nivel de conocimiento de dicho 'field' y 'category' es la categoría a la que dicho 'field' pertence dentro del área de Desarrollo Web. A partir de la lista antes mencionada, genera 10 preguntas para realizarle al candidato en una entrevista laboral técnica-conceptual; el enfoque de las preguntas generadas debe ser exclusivamente para una entrevista laboral técnica-conceptual. Estas preguntas deben tener sólo un interrogativo y un sujeto, por ejemplo: '¿Cuáles son los métodos HTTP?'. Cabe mencionar que el objetivo es realizar una entrevista estructurada y asimismo, debes generar las preguntas desde tu punto de vista. Quiero que tu respuesta sea únicamente un párrafo con las preguntas separadas por '||'; ejemplo de salida: '¿Cuáles son los métodos HTTP?||¿Qué es una Base de Datos Relacional?||¿Cuál es la diferencia entre javascript y typescript?'" 
            },
            {
                role: "user",
                content: jsonData.cvFieldsDTOs//serializedFields 
            }
        ],
        model: "gpt-3.5-turbo-0125",
    });
    const content = jsonData.cvId + "||" + chatCompletion.choices[0].message.content;
    console.log({content})*/
    return "content"//content;
}