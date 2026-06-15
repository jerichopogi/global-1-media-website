/**
 * Stock imagery (Unsplash). All URLs verified reachable.
 * `u(id, w)` builds an auto-formatted, cropped, quality-tuned URL.
 * Swap any `photo-...` id here to change an image site-wide.
 */
const u = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=70`;

export const images = {
  // Atmospheric studio / broadcast
  heroStudio: u("1487215078519-e21cc028cb29", 1800), // soundboard glow
  studioDesk: u("1598488035139-bdbb2231ce04", 1400), // on-air desk
  liveMic: u("1493225457124-a3eb161ffa5f", 1400), // mic on stand
  broadcastMic: u("1516280440614-37939bbacd81", 1200),
  mixer: u("1511671782779-c97d3d27a1d4", 1200),

  // Solutions
  radioTower: u("1535223289827-42f1e9919769", 1000), // broadcast
  officeCollab: u("1497032205916-ac775f0649ae", 1000), // digital
  headphones: u("1505740420928-5e560c06d30e", 1000), // streaming
  citySkyline: u("1444723121867-7a241cacace9", 1000), // local impact

  // Markets
  elko: u("1500530855697-b586d89ba3ee", 1200), // desert mountains (NV)
  clovis: u("1469474968028-56623f02e42e", 1200), // open plains (NM)
  streaming: u("1551817958-d9d86fb29431", 1200), // headset

  // People / careers
  teamMeeting: u("1521737604893-d14cc237f11d", 1400),
  officeTeam: u("1486520299386-6d106b22014b", 1400),

  // Misc
  concertCrowd: u("1470229722913-7c0e2dbbafd3", 1600),
} as const;
