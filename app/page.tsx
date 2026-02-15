"use client";
import React from "react";
import { motion } from "framer-motion";
import { Map, BarChart3, Smartphone, GraduationCap, Mail, Phone } from "lucide-react";

export default function NichyI2BWebsite() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          NICHY - I²B
        </motion.h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Centre de formation en SIG, Enquête Numérique de Terrain, Analyse de Données et Installation Solaire.
        </p>
        <button className="bg-white text-blue-800 rounded-2xl text-lg px-6 py-3 font-semibold hover:bg-gray-100">
          Découvrir nos formations
        </button>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Nos Domaines de Compétence</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="rounded-2xl shadow-lg p-6 space-y-4 bg-white">
            <Map className="w-10 h-10 text-blue-600" />
            <h3 className="text-xl font-semibold">SIG & Cartographie</h3>
            <p>
              Formation complète sur QGIS, Global Mapper, production de cartes, analyse spatiale et géolocalisation.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg p-6 space-y-4 bg-white">
            <Smartphone className="w-10 h-10 text-indigo-600" />
            <h3 className="text-xl font-semibold">Enquête Numérique</h3>
            <p>
              Création de questionnaires KoboToolbox, KoboCollect, ODK, collecte mobile, supervision et contrôle qualité.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg p-6 space-y-4 bg-white">
            <BarChart3 className="w-10 h-10 text-green-600" />
            <h3 className="text-xl font-semibold">Analyse de Données</h3>
            <p>
              Traitement et analyse statistique avec SPSS, Excel et Sphinx. Rapports professionnels pour ONG.
            </p>
          </div>

          <div className="rounded-2xl shadow-lg p-6 space-y-4 bg-white">
            <GraduationCap className="w-10 h-10 text-yellow-600" />
            <h3 className="text-xl font-semibold">Nutrition & Sécurité Alimentaire</h3>
            <p>
              Formation sur les indicateurs nutritionnels, vulnérabilité alimentaire et méthodologie d’enquête terrain.
            </p>
          </div>

        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Pourquoi choisir NICHY - I²B ?</h2>
          <p>
            Nous formons des agents enquêteurs, superviseurs et analystes capables de travailler avec les ONG, projets de développement et institutions internationales.
          </p>
          <p>
            Notre approche est pratique, basée sur des exercices réels, la collecte terrain via smartphone et l’analyse complète jusqu’au rapport final.
          </p>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-gray-100 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold">Contact</h2>
          <div className="space-y-2">
            <p className="flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" /> 66769225 / 97656327
            </p>
            <p className="flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" /> ecclesiasteallandemadji@gmail.com
            </p>
            <p>Ndjamena / Toukra, 9e arrondissement</p>
          </div>
          <button className="bg-indigo-700 text-white rounded-2xl mt-6 px-6 py-3 font-semibold hover:bg-indigo-800">
            Nous contacter
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-indigo-900 text-white text-center py-6">
        <p>© 2026 NICHY - I²B | Formation Professionnelle & Expertise Terrain</p>
      </footer>
    </div>
  );
}
