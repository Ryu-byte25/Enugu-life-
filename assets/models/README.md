# Enugu Life 3D Asset Pipeline

Enugu Life now treats visual art as replaceable production assets instead of hard-coded geometry.

## Runtime asset layout
- `assets/models/characters/player.glb`
- `assets/models/interiors/campus-lodge.glb`
- `assets/models/props/*.glb`
- `assets/models/vehicles/*.glb`
- `assets/models/enugu/*.glb`

## Campus Lodge interaction nodes
The lodge GLB should expose named objects:
- `INT_SLEEP`
- `INT_EAT`
- `INT_COMPUTER`
- `INT_RELAX`
- `INT_WARDROBE`
- `INT_EXIT`

The renderer can bind these nodes to Enugu Life actions without changing the economy/state layer.

## Mobile budget
Prefer GLB/GLTF with compressed textures, shared materials, low draw-call count and LODs. The target is a polished stylized life-sim presentation while remaining practical on mid-range Android hardware.

## Art rule
Use original Enugu Life models, textures, characters and UI. Reference games may define the quality bar and genre, but their proprietary assets are not copied.
