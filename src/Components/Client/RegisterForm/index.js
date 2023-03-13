import React from 'react'
import {SectionF1, FormCtn1, CampoTexto1, LabelInput1} from './styled'
export function RegisterForm(){
  return (
    <SectionF1>
     
            <FormCtn1>
            <LabelInput1 forHTML="Nome">
                <CampoTexto1 id="Nome" Name="Nome" placeholder="Nome Completo"/>
                </LabelInput1>
                <LabelInput1  forHTML="Cargo">
                <CampoTexto1 id="Cargo" name="Cargo" placeholder="Digite seu cargo" type="text"/>
                </LabelInput1>
                <LabelInput1  forHTML="CPF">
                <CampoTexto1 id="CPF" name="CPF" placeholder="NUMERO CPF" type="text"/>
                </LabelInput1>
                <LabelInput1  forHTML="Salario">
                <CampoTexto1 id="Salario" name="Salario" placeholder="Min (R$1000)" type="number" min="1000"/>
                <hr/>
                <p>En caso de nao ser aprovado consulte nossos CUPONS DE DESCONTO!</p>
                </LabelInput1>
                
            </FormCtn1>

    </SectionF1>
  )
}


