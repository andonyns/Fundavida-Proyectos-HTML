<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8" />
        <title>Ronaldo</title>
        <Script type="text/javascript">

            funtion validar form_Contacto(){

                var Nombre = formContacto.Nombre.value;
                var Email = formContacto.Email.value;
                var Telefono = formContacto.Telefono.value;
                var Celular = formContacto.Celular.value;
                var Mensaje = formContacto.Mensaje.value;

                if(Nombre == ""){
                    alert("campo Nombre es obrigatorio");
                    formContacto.Nombre.focus();
                    return false;
                }

                if(Email == ""){
                    alert("campo Email es obrigatorio");
                    formContacto.Email.focus();
                    return false;
                }

                if(Telefono == ""){
                    alert("campo Telefono es obrigatorio");
                    formContacto.Telefono.focus();
                    return false;
                }

                if(Celular == ""){
                    alert("campo Celular es obrigatorio");
                    formContacto.Celular.focus();
                    return false;
                }

                if(Mensaje == ""){
                    alert("campo Mensaje es obrigatorio");
                    formContacto.Mensaje.focus();
                    return false;
                }

                

            
                
            }
        </Script>
        </head>
        