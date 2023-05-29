import React, { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet';
import { TextField, MenuItem } from "@mui/material";
import { InputAdornment } from "@mui/material";
import flag from "./flag.png";

export default function App() {
    const overlayRef = useRef<HTMLDivElement>(null);
    const [places, setPlaces] = useState({ stahJaber: [35.76586, 10.840116], citeOmrane: [35.768437, 10.816517], skanes: [35.766252, 10.802018] });
    const [currentPlace, setCurrentPlace] = useState("citeOmrane");
    const [phone, setPhone] = useState("");

    function toggleModal(e: React.MouseEvent, type: string) {
        if (type === "open") {
            overlayRef.current?.classList.remove("hidden");
        } else {
            if (e.target === overlayRef.current) {
                overlayRef.current.classList.add("hidden");
            }
        }
    }

    return (
        <>
            <button onClick={(e) => toggleModal(e, "open")} >open modal</button>
            <div onClick={(e) => toggleModal(e, "close")} ref={overlayRef} className="overlay hidden">
                <form autoComplete="off" className="modal">
                    <MapContainer center={[35.7645, 10.8153]} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={places[currentPlace as keyof typeof places]}></Marker>
                    </MapContainer>
                    <TextField value={currentPlace} onChange={e => setCurrentPlace(e.target.value)} label="Choose Location..." select >
                        <MenuItem value="stahJaber" >Stah Jaber</MenuItem>
                        <MenuItem value="citeOmrane" >Cité Omrane</MenuItem>
                        <MenuItem value="skanes" >Skanes</MenuItem>
                    </TextField>
                    <TextField InputProps={{
                        startAdornment:<InputAdornment position="start" >
                            <img width={20} src={flag} alt="" />
                        </InputAdornment>
                    }} value={phone} onChange={e => setPhone(e.target.value)} label="Enter phone..." />
                    <button>Confirm Order</button>
                </form>
            </div>
        </>
    )
}