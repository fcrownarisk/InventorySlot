type InventorySlots = (t: string, z: string, y: string, x: string) => void;
const InventorySlots1: InventorySlots = (t1, z1, y1, x1) => {
    const x1Items = "?? ?? ?? ??";
    const y1Items = "$$ $$ $$ $$";
    const z1Items = "!! !! !! !!";
    const t1Items = "@@ @@ @@ @@";

    console.log(`${x1Items}/${y1Items}/${z1Items}/${t1Items}`);
};
const InventorySlots2: InventorySlots = (t2, z2, y2, x2) => {
    const x2Items = "-- -- -- --";
    const y2Items = "|| || || ||";
    const z2Items = "~~ ~~ ~~ ~~";
    const t2Items = "\\ \\ \\ \\";
    console.log(`${x2Items}/${y2Items}/${z2Items}/${t2Items}`);
};
const InventorySlots3: InventorySlots = (z1, z2, z3, z4) => {
    const z1Items = "()() ()() ()() ()()";
    const z2Items = "[][] [][] [][] [][]";
    const z3Items = "{}{} {}{} {}{} {}{}";
    const z4Items = "<><> <><> <><> <><>";

    console.log(`${z1Items}/${z2Items}/${z3Items}/${z4Items}`);
};
const InventorySlots4: InventorySlots = (zz1, zz2, zz3, zz4) => {

    const zz1Items = "++ ++ ++ ++";
    const zz2Items = "-- -- -- --";
    const zz3Items = "** ** ** **";
    const zz4Items = "%% %% %% %%";


    console.log(`${zz1Items}/${zz2Items}/${zz3Items}/${zz4Items}`);
}

