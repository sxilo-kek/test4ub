import React, { useContext } from 'react';
import 'survey-react/survey.css';
import * as Survey from 'survey-react';
import { Context } from '../context/surveyContext'
import { json } from './ebuQuestions'

const SurveyType = (prop) => {
  const { state: { surveys: { data } } } = useContext(Context);
  console.log(data)

  return (
    <Survey.Survey
      json={json}
      showCompletedPage={false}
      onComplete={data => prop.showCompletePage(data.valuesHash)}
    />
  )
}
export default SurveyType;