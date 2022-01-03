import axios from "axios";
import { BASE_TEAMS_URL } from "@/const";

export const getAllTeams = async () => await axios.get(BASE_TEAMS_URL);

