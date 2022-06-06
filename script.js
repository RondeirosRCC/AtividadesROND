window.onload = function carregar(){
    var link = window.location.href
    var usuario = link.substring(link.indexOf("=") + 1)
    document.getElementById("nickname").value = usuario
    

    var dataAtual = new Date()
    var dia = dataAtual.getDate()
    var mes = (dataAtual.getMonth() + 1)
    var ano = dataAtual.getFullYear()
    var horas = dataAtual.getHours()
    var minutos = dataAtual.getMinutes()
    // Variáveis referentes à data e hora
    var horario_comeco
    var dia_comeco
              
    //Ajustar formatação ao padrão utilizado nos formulários google, utilizando sempre horário no formado xx:xx e data xx/xx/xxxx
    if (horas < 10){
      var horario_comeco = "0" + horas + ":" + minutos
    } 
    if (minutos < 10) {
      var horario_comeco = "" + horas + ":" + "0" + minutos
    } 
    if (horas < 10 && minutos < 10){
      var horario_comeco = "0" + horas + ":" + "0" + minutos
    }
    if (horas >= 10 && minutos >= 10){
      var horario_comeco = "" + horas + ":" + minutos
    }

    //  *********NÃO MUDAR O "VAR" DO IF PARA "LET", OU IRÁ BUGAR TODO O SISTEMA!*********
    if (dia < 10){
      var dia_comeco = "0" + dia + "/" + mes + "/" + ano
    }
    if (mes < 10){
      var dia_comeco = dia + "/0" + mes + "/" + ano
    }
    if (dia < 10 && mes < 10){
        var dia_comeco = "0" + dia + "/0" + mes + "/" + ano
    }
    if (dia >= 10 && mes >= 10){
      var dia_comeco = dia + "/" + mes + "/" + ano
    }
    //Preencher input com hora de acesso
    document.getElementById("horario_inicio").value = dia_comeco + " - " + horario_comeco
}

function MudarModalidade(){
    var select = document.getElementById("Modalidades");
    var opcaoTexto = select.options[select.selectedIndex].text;

    document.getElementById("modalidade").innerHTML = opcaoTexto
    document.getElementById("nickaluno").value = "" 
    document.getElementById("printscreen1").value = "" 
    document.getElementById("printscreen2").value = ""
    document.getElementById("nick_infratores").value = "" 

    var inputs = document.querySelectorAll('input[type="radio"]');
    for (var i = 0, l = inputs.length; i < l; i++){
        inputs[i].checked = false;
    }

    if(opcaoTexto=="Curso Operacional Tático"){
        document.getElementById("COT").style.display ="block"
        document.getElementById("RDouRR").style.display ="none"
        document.getElementById("RFQouRDI").style.display ="none"
       
    }
    if(opcaoTexto=="Ronda de Divulgação"){
        document.getElementById("COT").style.display ="none"
        document.getElementById("RDouRR").style.display ="block"
        document.getElementById("RFQouRDI").style.display ="none"

    }
    if(opcaoTexto=="Ronda de Recrutamento"){
        document.getElementById("COT").style.display ="none"
        document.getElementById("RDouRR").style.display ="block"
        document.getElementById("RFQouRDI").style.display ="none"

    }
    if(opcaoTexto=="Ronda de Fechar Quartos"){
        document.getElementById("COT").style.display ="none"
        document.getElementById("RDouRR").style.display ="none"
        document.getElementById("RFQouRDI").style.display ="block"

    }
    if(opcaoTexto=="Ronda de Denunciar Infrator"){
        document.getElementById("COT").style.display ="none"
        document.getElementById("RDouRR").style.display ="none"
        document.getElementById("RFQouRDI").style.display ="block"

    }
}

function SubForm(){
    var select = document.getElementById("Modalidades");
    var opcaoTexto = select.options[select.selectedIndex].text;

    if(opcaoTexto == "Ronda de Recrutamento" || opcaoTexto == "Ronda de Divulgação"){
        document.getElementById("nick").innerHTML = nickname
        var printscreen = document.getElementById("printscreen1").value

    } else if (opcaoTexto == "Ronda de Fechar Quartos" || opcaoTexto == "Ronda de Denunciar Infrator"){
        document.getElementById("nick").innerHTML = nickname
        var printscreen = document.getElementById("printscreen2").value
    } else if (opcaoTexto == "Curso Operacional Tático"){
        var printscreen = ""
    }
    

    var nickname = document.getElementById("nickname").value
    var infratores = document.getElementById("nick_infratores").value
    var inicio = document.getElementById("horario_inicio").value
    var aluno = document.getElementById("nickaluno").value
    
    if (document.getElementById('Aprovado').checked) {
        document.getElementById("resultado_cot").innerHTML = "Aprovado"
    } else if (document.getElementById('Reprovado').checked){
        document.getElementById("resultado_cot").innerHTML = "Reprovado"
    }

    document.getElementById("nick").innerHTML = nickname
    document.getElementById("nick_aluno").innerHTML = aluno
    document.getElementById("print").innerHTML = printscreen
    document.getElementById("infrator").innerHTML = infratores
    document.getElementById("hora_inicio").innerHTML = inicio



    $.ajax({
        url:"https://api.apispreadsheets.com/data/VzOCYvmp64PCLPIC/",
        type:"post",
        data:$("#myForm").serializeArray(),
        success: function(){
            alert("Form Data Submitted :)")
        },
        error: function(){
            alert("There was an error :(")
        }
    });
}
