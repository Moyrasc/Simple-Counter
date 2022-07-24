/* Voy a repetir el ejercicio esta vez aplicando Hooks para practicar con ellos, aún no esta finalizado, de momento he creado el botón de start/stop 
para iniciar y pausar el contador, me queda el botón para que el usuario pueda introducir su propio timer y crear la alerta.*/



function secondCounterPruebaHooks() {
    // comienzo creando las variables de estado (seg,min,h y dias)
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    const [days, setDays] = useState(0);
    // esta variable la he usado para activar/parar el contador
    const [start, setStart] = useState(false);
  
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
        <div className="Container-fluid">
          <div className="row justify-content-center text-white">
            <div className="col-2 digit shadow p-2 me-1 rounded-3">
              <i className="far fa-clock #offset"></i>
            </div>
            <div className="col-2 digit shadow p-2 me-1 rounded-3">{days}</div>
            <div className="col-2 digit shadow p-2 me-1 rounded-3">{hours}</div>
            <div className="col-2 digit shadow p-2 me-1 rounded-3">{minutes}</div>
            <div className="col-2 digit shadow p-2 rounded-3">{seconds}</div>
          </div>
        </div>
        <div className="text-center mt-3">
          <div
            className="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
             type="button"
             onClick={() => setStart(!start)}
             className="btn btn-outline-dark"
            >
            {/* renderizado condicional para que pinte un icono u otro dependiendo del estado   */}
              {start ? "⏸️" : "▶️"}
            </button>
            <button
              type="button"
              className="btn btn-outline-dark "
            >
              🔄
            </button>
            <button
                type="button"
                id="btn-modal"
                class="btn btn-outline-dark"
                data-bs-toggle="modal"
                data-bs-target="#ModalTimer"
              >
                ⏱
              </button>
          </div>
          </div>
          <div class="modal" id="ModalTimer" tabindex="-1">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header py-1 px-2">
                  <h5 class="modal-title">Timer</h5>
                </div>
                <div class="modal-body">
                  <p>Timer: Insert seconds, minutes, hours and days </p>
    
                  <div class="input-group mb-3">
                    <span class="input-group-text">sec</span>
                    <input type="number" class="form-control form-control-sm shadow-none" id="card-second" placeholder="sec"/>
                    <span class="input-group-text">min</span>
                    <input type="number" class="form-control form-control-sm shadow-none" id="card-minutes" placeholder="min"/>
                    <span class="input-group-text">hour</span>
                    <input type="number" class="form-control form-control-sm shadow-none" id="card-hours" placeholder="h"/>
                    <span class="input-group-text">day</span>
                    <input type="number" class="form-control form-control-sm shadow-none" id="card-days" placeholder="d"/>
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-sm btn-secondary" data-bs-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-sm btn-success" data-bs-dismiss="modal" id="btn-timer">Save</button>
                </div>
              </div>
          </div>
        </div>
      </>
    );
  }