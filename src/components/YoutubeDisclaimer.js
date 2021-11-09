import React from 'react';
import YoutubeEmbed from './YoutubeEmbed';

export default function YoutubeDisclaimer() {
  return (
    <div className="yt-container">
      <div className="yt-text-container">
        <h3>Case de Sucesso: AmstedMaxion e TRACTIAN</h3>
        <h4>A AmstedMaxion é a maior fabricante de fundidos ferroviários e industriais da América do Sul! E está usufruindo do monitoramento online de ativos TRACTIAN.</h4>
      </div>
      <div className="yt-thumbnail-container">
        <YoutubeEmbed embedId="JIdKPsDjIaY?list=TLGG_LEqdyL0xEgwOTExMjAyMQ" />
      </div>
    </div>
  )
}
