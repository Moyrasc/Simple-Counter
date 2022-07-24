/* Voy a repetir el ejercicio esta vez aplicando Hooks para practicar con ellos, aún no esta finalizado, de momento he creado el botón de start/stop 
para iniciar y pausar el contador, he empezado a crear la lógica de los inputs utilizando el evento onChange.
Me falta el botón para que activa el timer del usuario  y crear la alerta.*/



function secondCounterPruebaHooks() {
    // comienzo creando las variables de estado (seg,min,h y dias)
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    // esta variable la he usado para activar/parar el contador
    const [start, setStart] = useState(false);
    //Creo nuevas variables para los valores introducidos por el usuario
    const [mySeconds, setMySeconds] = useState(0);
    const [myMinutes, setMyMinutes] = useState(0); 
    const [myMHours, setMyHours] = useState(0); 
    const [myDays, setMyDays] = useState(0); 
  
    /* Con el hook useEffect podremos ejecutar código cada vez que nuestro componente se renderice, por lo que creo 
     que esta podría ser una opción para el temporizador*/
    useEffect(() => {
      let myInterval = setInterval(() => {
        if (start) {
          setSeconds(seconds + 1);
          if (seconds === 60) {
            setMinutes(minutes + 1);
            setSeconds(0);
          }
          if (minutes === 60) {
            setHours(hours + 1);
            setMinutes(0);
          }
          if (hours === 24) {
            setDays(days + 1);
          }
        }
      }, 1000);
      return () => clearInterval(myInterval);
    }, [seconds, minutes, hours, days, start]);
  
    return (
      <>
        <div classNameName="Container-fluid">
          <div classNameName="row justify-content-center text-white">
            <div classNameName="col-2 digit shadow p-2 me-1 rounded-3">
              <i classNameName="far fa-clock #offset"></i>
            </div>
            <div classNameName="col-2 digit shadow p-2 me-1 rounded-3">{days}</div>
            <div classNameName="col-2 digit shadow p-2 me-1 rounded-3">{hours}</div>
            <div classNameName="col-2 digit shadow p-2 me-1 rounded-3">{minutes}</div>
            <div classNameName="col-2 digit shadow p-2 rounded-3">{seconds}</div>
          </div>
        </div>
        <div classNameName="text-center mt-3">
          <div
            classNameName="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
             type="button"
             onClick={() => setStart(!start)}
             classNameName="btn btn-outline-dark"
            >
            {/* renderizado condicional para que pinte un icono u otro dependiendo del estado   */}
              {start ? "⏸️" : "▶️"}
            </button>
            <button
              type="button"
              classNameName="btn btn-outline-dark "
            >
              🔄
            </button>
            <button
                type="button"
                id="btn-modal"
                className="btn btn-outline-dark"
                data-bs-toggle="modal"
                data-bs-target="#ModalTimer"
              >
                ⏱
              </button>
          </div>
          </div>
          <div className="modal" id="ModalTimer" tabIndex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header py-1 px-2">
                  <h5 className="modal-title">Timer</h5>
                </div>
                <div className="modal-body">
                  <p>Timer: Insert seconds, minutes, hours and days </p>
    
                  <div className="input-group mb-3">
                    <span className="input-group-text">sec</span>
                    {/* utilizo el evento onChange que se encargará de recoger los cambios del input */}
                    <input type="number" classNameName="form-control form-control-sm shadow-none" onChange={e => setMySeconds(e.target.value)} value={mySeconds} id="card-second" placeholder="sec"/>
                    <span className="input-group-text">min</span>
                    <input type="number" className="form-control form-control-sm shadow-none" onChange={e => setMyMinutes(e.target.value)} value={myMinutes} id="card-minutes" placeholder="min"/>
                    <span className="input-group-text">hour</span>
                    <input type="number" className="form-control form-control-sm shadow-none" onChange={e => setMyHours(e.target.value)} value={myMHours} id="card-hours" placeholder="h"/>
                    <span className="input-group-text">day</span>
                    <input type="number" className="form-control form-control-sm shadow-none" onChange={e => setMyDays(e.target.value)} value={myDays} id="card-days" placeholder="d"/>
                  </div>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-sm btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" className="btn btn-sm btn-success" data-bs-dismiss="modal" id="btn-timer" onClick={() => setStart(!start)}>Save</button>
                </div>
              </div>
          </div>
        </div>
      </>
    );
  }