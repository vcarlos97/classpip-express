import { Nivel } from "./Nivel";

export class Juego {
  Tipo: string;
  Modo: string;
  Asignacion: string;
  JuegoActivo: boolean;
  grupoId: number;
  id: number;
  NumeroTotalJornadas: number;
  coleccionId: number;
  TipoJuegoCompeticion: string;
  NumeroParticipantesPuntuan: number;
  Puntos: number[];
  NombreJuego: string;
  PuntuacionCorrecta: number;
  PuntuacionIncorrecta: number;
  Presentacion: string;
  JuegoTerminado: boolean;
  profesorId: number;
  cuestionarioId: number;
  PuntuacionCorrectaBonus: number;
  PuntuacionIncorrectaBonus: number;
  PreguntasBasicas: number[];
  PreguntasBonus: number[];
  idescenario: number;

  TiempoLimite: number; // para el juego de cuestionario

  constructor(
    Tipo?: string,
    Modo?: string,
    Asignacion?: string,
    coleccionId?: number,
    JuegoActivo?: boolean,
    NumeroTotalJornadas?: number,
    TipoJuegoCompeticion?: string,
    NumeroParticipantesPuntuan?: number,
    Puntos?: number[],
    NombreJuego?: string,
    PuntuacionCorrecta?: number,
    PuntuacionIncorrecta?: number,
    Presentacion?: string,
    JuegoTermiando?: boolean,
    profesorId?: number,
    cuestionarioId?: number,
    PuntuacionCorrectaBonus?: number,
    PuntuacionIncorrectaBonus?: number,
    PreguntasBasicas?: number[],
    PreguntasBonus?: number[],
    idescenario?: number,
    TiempoLimite?: number,
  ) {
    this.Tipo = Tipo;
    this.Modo = Modo;
    this.Asignacion = Asignacion;
    this.JuegoActivo = JuegoActivo;
    this.coleccionId = coleccionId;
    this.NumeroTotalJornadas = NumeroTotalJornadas;
    this.TipoJuegoCompeticion = TipoJuegoCompeticion;
    this.NumeroParticipantesPuntuan = NumeroParticipantesPuntuan;
    this.Puntos = Puntos;
    this.NombreJuego = NombreJuego;
    this.PuntuacionCorrecta = PuntuacionCorrecta;
    this.PuntuacionIncorrecta = PuntuacionIncorrecta;
    this.Presentacion = Presentacion;
    this.JuegoTerminado = JuegoTermiando;
    this.profesorId = profesorId;
    this.cuestionarioId = cuestionarioId;
    this.PuntuacionCorrectaBonus = PuntuacionCorrectaBonus;
    this.PuntuacionIncorrectaBonus = PuntuacionIncorrectaBonus;
    this.PreguntasBasicas = PreguntasBasicas;
    this.PreguntasBonus = PreguntasBonus;
    this.idescenario = idescenario;

    this.TiempoLimite = TiempoLimite;
  }
}
