namespace StatusBarKind {
    export const Waves_Time = StatusBarKind.create()
}
function Main_menu () {
	
}
function Race_Select () {
    scene.setBackgroundImage(img`
        eeeee2222222222222222222222222222222222ee2222ee2222ee2222222eeeee2222222222222222222222222222222222ee22222eeee222ee2eeeee2222222222222222222222222222222222ee222
        222eeeee22222222222222222222222222222eee2222eeee2222ee222222222eeeee22222222222222222222222222222eee2222eeeee222ee22222eeeee22222222222222222222222222222eee2222
        222222eeeeeee222222222222222222222eeee22222eeeeee2222eee2222222222eeeeeee222222222222222222222eeee22222eeee2222ee222222222eeeeeee222222222222222222222eeee22222e
        222222222eeeeeeeeeeeeee2222222eeeee222222eeee22eee2222eeee22222222222eeeeeeeeeeeeee2222222eeeee222223eeee22222eeee22222222222eeeeeeeeeeeeee2222222eeeee222222eee
        e222222222222222222222222222eeee2222222eeee22222eef22222eeeee222222222222222222222222222eeee2333333eeee22222efe2eeeee222222222222222222222222222eeee2222222eeee2
        eeeeeeee22222222222222222222222222222eee2222222eeeefe222222eeeeeeeee22222222222222333333333333322eee2222222efe22222eeeeeeeee22222222222222222222222222222eee2222
        2222eeeeeeeee222222222222222222222eeee2222222eeeeeeeffe222222222eeeeeeeee222223333333333322222eeee2223322effeee222322222eeeeeeeee222222222222222222222eeee222222
        2223322222222222222222222222222eeee2222222eeeeeeee222efffe222222222222222222222222222222222eeee2233332efffe22eeeee233333222222222222222222222222222eeee2222222ee
        2222233332222222222222222222222222222222eeeeeeeee22222eefffe2222222222222222222222222222222233333332efffee22222eeeee2233333333333333333332222222222222222222eeee
        eeee22233333333333333332222222222222eeeeee222222222eeeee22ffffee22222222223333333333333333333332eeffff22eeeee22222eeeeee23333333333333222222222222222222eeeeeeee
        eeeeeeeeee233333333332222222222eeeeeee2222222222eeeee2222ffeefffffffee2222222222223333333332fffffffeeff2222eeeee222222eeeeeeee222222222222222222222eeeeeeeeeeeee
        eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee22eeeeeeee2222eee222222ffeeeeeeeeeeffffffffffffffffffffffffeeeeeeeeeeff222222eee2222eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
        eeeeeeeeeee22222222222222ee22222222222222222222222222effeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeffe22222222222222222222222222ee22222222222222eeeeeeeeeee
        eeeeeeeeee22222222222222222eeee2222222222222222222efffeeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeeeeee2eeeeeeeeeeeeeefffe2222222222222222222eeee22222222222222222eeeeeeeeee
        eeeeeeeeee222222222222222222eeeeeeee222222222eeefffeeeeeeeeeeeeeeeeeeeee222222eeeeeeeeee2222eeeeeeeeeeeeeeeeefffeee222222222eeeeeeee222222222222222222eeeeeeeeee
        eeeeeeeee2222222222222222222eeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee2eeeeeeeeeeeeeeeeeffffeeeeeeeeeeeeeeee2222222222222222222eeeeeeeee
        eeeeeeeee2222222222222222222ee2222effffffffffffeeeeeeeeeeeeeeeeeeeeeeeee22222222222222222222ee22eeeeeeeeeeeeeeeefffffffffffffe2222ee2222222222222222222eeeeeeeee
        eeeeeeee22e22222222222222222ee2222eeee2efffffffeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffe2eeee2222ee22222222222222222e22eeeeeeee
        eeeeeeee2222222222222222222ee22222ee22eeffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeeffffffffee22ee22222ee2222222222222222222eeeeeeee
        eeeeeeee2e2222222222222222eee22222ee22efffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffe22ee22222eee2222222222222222e2eeeeeeee
        eeeeeee22e2222222222222222ee222222e22eefffffffeeeeeeeeeeeeeeeeeeeeee22ee22222222222222222222e222eeeeeeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeeee
        eeeeeee22e222222222222222ee222222ee22effffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e222eeee2eeeeeeeeeeeefffffffffe22ee222222ee222222222222222e22eeeeeee
        eeeeee22e2222222222222222ee222222e22eeffffffffeeeeeeeeeeeeeeeeee2eee22ee22222222222222222222e2222eee2eeeeeeeeeeeefffffffffee22e222222ee2222222222222222e22eeeeee
        eeeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee2ee222e222222222222222222222e2222eee2eeeeeeeeeeeefffffffffe3e2ee222222ee222222222222222e22eeeeee
        eeeee22ee222222222222222ee22222ee22eefffffffffeeeeeeeeeeeeeeeeee2ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe322ee22222ee222222222222222ee22eeeee
        eeeee22e222222222222222ee222222ee2eeeffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee2eeeeeeeeeeeeffffffffffe3e2ee222222ee222222222222222e22eeeee
        eeee22ee222222222222222e222222ee22eefffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eee22eeeeeeeeeeeeffffffffffe322ee222222e222222222222222ee22eeee
        eeee22ee22e22222222222ee22222ee22eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e222eeee2eeeeeeeeeeeefffffffffff3322ee22222ee22222222222e22ee22eeee
        eeee2ee222222222222222e222222ee32eeffffffffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeefffffffffffe332ee222222e222222222222222ee2eeee
        eee22ee22e22222222222e222222ee32eeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffff3322ee222222e22222222222e22ee22eee
        eee2ee222e22222222222e22222ee23eeeffffffeffffeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeffffffffffffe3322ee22222e22222222222e222ee2eee
        ee22ee22e22222222222e222222ee32eefffffffefffeeeeeeeeeeeeeeeeeee22ee222e2222222222222222222222e2222eee2eeeeeeeeeeeeeffffffffffffe332ee222222e22222222222e22ee22ee
        ee2eee2ee2222222222e222222ee33eeefffffffefffeefeeeeeeeeeeeeeee222ee22ee2222222222222222222222e2222eee22eeeeeeeeeeeeffffffffffffe3322ee222222e2222222222ee2eee2ee
        eeeee22ee2222222222e22222ee33eeeffffffffffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefffffffffffffe3322ee22222e2222222222ee22eeeee
        eeeee2ee2222222222222222eee33eeffffffffeffffeefeeeeeeeeeeeeeee22eee22ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffffffffffe332eee2222222222222222ee2eeeee
        eeee22ee2222222222222222ee33eeeffffffffeffffeefeeeeeeeeeeeeeee22ee222ee2222222222222222222222e2222eee22eeeeeeeeeeeefeffffefffffffe3332ee2222222222222222ee22eeee
        eeee2ee2222222222222222ee33eeefffffffffeffffeefeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeffffeffffffffe3322ee2222222222222222ee2eeee
        eeee2ee222222222222222ee333eeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e2222eee22eeeeeeeeeeeeeeefffefffffffffe3322ee222222222222222ee2eeee
        eee2ee2222222222222222ee33eeeffffffffffefffeeeeeeeeeeeeeeeeeee22ee222e22222222222222222222222e22222ee22eeeeeeeeeeeeeeefffefffffffffee332ee2222222222222222ee2eee
        eee2ee222222222222222ee33eeefffffffffffefffeefeeeeeeeeeeeeeeee22ee222e22222222222222222222222ee2222eee2eeeeeeeeeeeeeeefffeffffffffffe3332ee222222222222222ee2eee
        ee2ee2222222222222222e33eeefffffffffffeefffeefeeeeeeeeeeeeeee222ee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeffffeffffffffffe3322e2322222222222222ee2ee
        ee2ee222222222222232e333eeffffffffffffeefffeefeeeeeeeeeeeeeee22eee222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffe3322e322222222222222ee2ee
        e2ee2222222222222322e33eeeffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffee332e2322222222222222ee2e
        e2ee222222222222332e33eeefffffffffffffeefffeefeeeeeeeeeeeeeee22ee2222e22222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffeffffffffffffe3322e322222222222222ee2e
        eee222222222222332e33eeeffffffffffffffeeffeeeeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeefffefffffffffffffe3322e322222222222222eee
        eee222222222222322332eefffffffffffffffefffeefeeeeeeeeeeeeeeee22ee2222222222222222222222222222ee2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffe3322322222222222222eee
        ee222222222222332333eeeffffffffffffffeefffeefeeeeeeeeeeeeeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeefffffffffffffee3223322222222222222ee
        ee22222222222332233eeefffffffffffffffeefffeefeeeeeeeeee2eeee222ee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffee322322222222222222ee
        e22222222222332233eeeffffffffffffffffeefffeefeeeeeeeeee2eeee22eee22222222222222222222222222222e2222eee22eeeeeeeeeeeeeeeefffefffffffffffffffe3323322222222222222e
        e22222222222332332eefffffffffffffffffeefffeefeeeeeeeeeeeeeee22eee22222222222222222222222222222e2222eeee2eeeeeeeeeeeeeeeefffeefffffffffffffffe322322222222222222e
        22222e22222332232eeefffffffffffffffffeefffeefeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffeee23322222222e22222
        22222e2222332232eeeffffffffffffffffffeeffeefeeeeeeeeee2eeeee22ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeeffffffffffffffffeee2322222222e22222
        222222222332222eeeffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeeffeefffffffffffffffffeee332222222222222
        2222e222233222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeffffffffffffffffffeee322222222e2222
        2222e222332222eeefffffffffffffffffffeefffeefeeeeeeeeee2eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeefffffffffffffffffeee332222222e2222
        222e222332222eeeffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee222222222222222222222222222222e22222eee22eeeeeeeeeeeeeeeefffeeffffffffffffffffffeee322222222e222
        222e22232e22eeefffffffffffffffffffffeefffeefeeeeeeeee2eeeee22eee222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffee332e22222e222
        222e22222e2eeeffffffffffffffffffffffeefffefeeeeeeeeee2eeeee22ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeeffeeffffffffffffffffffffee32e22222e222
        22ee2222e2eeeffffffffffffffffffffffeeffffefeeeeeeeeee2eeee222ee2222222222222222222222222222222222222eee22eeeeeeeeeeeeeeeeefffefffffffffffffffffffffee32e2222ee22
        22e22222e2eeeffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeeffffffffffffffffffffee32e22222e22
        22e2222eeeeefffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eee222eeeeeeeeeeeeeeeefffeefffffffffffffffffffffeeeee2222e22
        2ee2222eeeeffffffffffffffffffffffffeefffeefeeeeeeeee22eeee222ee2222222222222222222222222222222222222eeee22e2eeeeeeeeeeeeeefffeeffffffffffffffffffffffeeee2222ee2
        2e2222eeeefffffffffffffffffffffffffeefffefeeeeeeeeee2eeeee222ee2222222222222222222222222222222222222eeee22eeeeeeeeeeeeeeeeeffeefffffffffffffffffffffffeeee2222e2
        2e222eee2effffffffffffffffffffffffeeefffefeeeeeeeeee2eeee222eee222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        2e222eee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e222222222222222222222222222222222eeee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eee222e2
        ee22eeee2effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe2eeee22ee
        ee22eee22effffffffffffffffffffffffeeffffefeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeefffeeffffffffffffffffffffffe22eee22ee
        eeeeee22eeffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee2222e2222222222222222222222222222e22222eee22ee2eeeeeeeeeeeeeeeffeeffffffffffffffffffffffee22eeeeee
        eeeee222efffffffffffffffffffffffffeeffffeeeeeeeeeee2eeeee222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffe222eeeee
        2222222eeffffffffffffffffffffffffeeefffeeeeeeeeeee22eeee2222ee2222e2222222222222222222222222222e22222eee222e22eeeeeeeeeeeeeefffeeffffffffffffffffffffffee2222222
        222222eefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee2222e22222e2222222222222222222222222222e22222eee222ee2eeeeeeeeeeeeeefffeefffffffffffffffffffffffee222222
        22222eeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeeffeefffffffffffffffffffffffeee22222
        222eeeeefffffffffffffffffffffffffeeffffeeeeeeeeeee22eeee222ee22222e2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeeffffffffffffffffffffffeeeee222
        eeee2eeeeffffffffffffffffffffffffeeffffeeeeeeeeee22eeeee222ee2222ee2222222222222222222222222222e22222eeee22ee2eeeeeeeeeeeeeeefffeefffffffffffffffffffffeeee2eeee
        222e2ee2effffffffffffffffffffffffeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeeeffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee22ee22eeeeeeeeeeeeeefffeefffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeeee22eeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeeeffffeeffffffffffffffffffffe2ee2e222
        222e2ee2efffffffffffffffffffffffeefffffeeeeeeeee22eeeee2222ee2222ee2222222222222222222222222222e22222eeee222e22eeeeeeeeeeeeefffffeeffffffffffffffffffffe2ee2e222
        222e2ee22effffffffffffffffffffffeefffffeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeee222ee2eeeeeeeeeeeeeeffffeefffffffffffffffffffe22ee2e222
        222e2ee22effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee2eeeeeeeeeeeeeefffffefffffffffffffffffffe22ee2e222
        222e2eee2effffffffffffffffffffffeeffffeeeeeeeeee22eeee22222e22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeefffffefffffffffffffffffffe2eee2e222
        222e22ee2eefffffffffffffffffffffefffffeeeeeeeee222eee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeffffffffffffffffffffffffee2ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222ee2222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffefffffeeeeeeeee22eeee22222ee22222e22222222222222222222222222222ee2222eeeee22ee22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee22efffffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222e22eeeeeeeeeeeeeefffffffffffffffffffffffe22ee22e222
        222e22ee222effffffffffffffffffffffffffeeeeeeeee22eee222222ee22222e22222222222222222222222222222ee22222eeee222ee2eeeeeeeeeeeeeeefffffffffffffffffffffe222ee22e222
        222e22eee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeeeefffffffffffffffffffffe22eee22e222
        222e222ee22effffffffffffffffffffffffffeeeeeeee22eeee222222e222222e22222222222222222222222222222ee22222eeee222ee22eeeeeeeeeeeefffffffffffffffffffffffe22ee222e222
        222e222ee22eeffffffffffffffffffffffffeeeeeeeee22eee2222222e222222ee22222eeee222eeee222eeee22222ee222222eeee22222eeeeeeeeeeeeeffffffffffffffffffffffee22ee222e222
        222e222ee222efffffffcffffffffcccfffffcceeeeeceeeeeeee222eebeeeeeeddeeeeeeedeeeeeeeeeeeedeeeeeeeddeeeeeebeee22eeeeeeeeceeeeeccfffffcccffffffffcfffffe222ee222e222
        222e222ee222eccfffcccccfffffcccccccccccccccccceecccceeeeedddeeeedddddeeeddddeeeeddeeeeddddeeedddddeeeedbbbbeeecccceeccccccccccccccccccfffffcccccfffe222ee222e222
        222ee22ee222eecccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccee222ee22ee222
        222ee22ee2222eccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccce2222ee22ee222
        2222e222e2222eeccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccee2222e222e2222
        2222e222ee2222eccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccce2222ee222e2222
        2222e222ee2222eccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccce2222ee222e2222
        2222e222ee2222eecccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccee2222ee222e2222
        2222e2222e22e22eccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccce22e22e2222e2222
        222222222e22e22eeccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccee22e22e222222222
        222222222e22e222ecccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccce222e22e222222222
        2222222222e22e22eeccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccee22e22e2222222222
        222222e222e22e222ecccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccce222e22e222e222222
        222222e222222e222eeccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccee222e222222e222222
        222222e2222222e222eccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccce222e2222222e222222
        222222ee222222e222eecccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccee222e222222ee222222
        2222222e222222e2222eccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccce2222e222222e2222222
        22222e2e2222222e222eecccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccee222e2222222e2e22222
        22222e2e2222222e222eeccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccee222e2222222e2e22222
        22222e2e22222222e22eccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccce22e22222222e2e22222
        22222e2ee2222222e22ecccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccce22e2222222ee2e22222
        22222e2ee2222222eeeecccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccceeee2222222ee2e22222
        22222e22e2222222eeeccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccceee2222222e22e22222
        22222ee2e2222222eecccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccee2222222e2ee22222
        22222ee2e222222eecccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccee222222e2ee22222
        222222e2ee22222ecccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddddddddddccccccccccccccccccccccccccccccccccccce22222ee2e222222
        222222e22e2222eecccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccee2222e22e222222
        222222e22e22eeeccccccccccccccccccccccccccccccccccccccccccccccccddddddddddddddddddddddddddddddddddcccccccccccccccccccccccccccccccccccccccccccccccceee22e22e222222
        222222e2eeeeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceeeee2e222222
        222222e2ecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccce2e222222
        222222eeecccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccceee222222
        `)
    textSprite = textsprite.create("Untitled", 15, 1)
    textSprite.setMaxFontHeight(10)
    textSprite.setPosition(80, 30)
    textSprite.setOutline(1, 6)
    textSprite.setBorder(1, 6)
    Race_Select2 = [miniMenu.createMenuItem("Blue", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . 8 8 8 8 8 8 8 8 8 8 8 . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        . . . . . . 8 8 8 8 8 . . . . . 
        `), miniMenu.createMenuItem("Green", img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . 7 7 7 7 7 7 7 7 7 7 7 . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        . . . . . . 7 7 7 7 7 . . . . . 
        `)]
    if (blockSettings.exists("Have Completed The game")) {
        Race_Select2.push(miniMenu.createMenuItem("Red", img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . 2 2 2 2 2 2 2 2 2 2 2 . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            . . . . . . 2 2 2 2 2 . . . . . 
            `))
    }
    myMenu = miniMenu.createMenuFromArray(Race_Select2)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Rows, 1)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Height, 50)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Width, 100)
    myMenu.setStyleProperty(miniMenu.StyleKind.DefaultAndSelected, miniMenu.StyleProperty.Padding, miniMenu.createBorderBox(
    4,
    0,
    4,
    0
    ))
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.Border, 2)
    myMenu.setMenuStyleProperty(miniMenu.MenuStyleProperty.BorderColor, 6)
    myMenu.setPosition(84, 70)
    myMenu.setTitle("Race Select")
}
function Green_tutorial () {
    if (blockSettings.readNumber("Checkpoint") == 1) {
    	
    } else if (blockSettings.readNumber("Checkpoint") == 2) {
    	
    } else if (blockSettings.readNumber("Checkpoint") == 3) {
    	
    }
}
function Blue_tutorial () {
    if (blockSettings.readNumber("Checkpoint") == 1) {
    	
    } else if (blockSettings.readNumber("Checkpoint") == 2) {
    	
    } else if (blockSettings.readNumber("Checkpoint") == 3) {
    	
    }
}
function Intro () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    story.printCharacterText("Long ago before time had a name", "Narrator")
    story.printCharacterText("There existed two divine races which ruled over everything", "Narrator")
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff...............................................................................
        `)
    story.printDialog("The Blacks", 90, 90, 50, 150, 15, 1, story.TextSpeed.Slow)
    scene.setBackgroundImage(img`
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111
        `)
    story.printDialog("The Whites", 150, 90, 50, 150, 1, 15, story.TextSpeed.Slow)
    story.printCharacterText("They created many different sub races", "Narrator")
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    story.printDialog("Red", 120, 90, 50, 150, 2, 15, story.TextSpeed.Slow)
    story.printDialog("Orange", 120, 90, 50, 150, 4, 15, story.TextSpeed.Slow)
    story.printDialog("Yellow", 120, 90, 50, 150, 5, 15, story.TextSpeed.Slow)
    story.printDialog("Green", 120, 90, 50, 150, 7, 15, story.TextSpeed.Slow)
    story.printDialog("Blue", 120, 90, 50, 150, 8, 15, story.TextSpeed.Slow)
    story.printDialog("Purple", 120, 90, 50, 150, 10, 15, story.TextSpeed.Slow)
    story.printDialog("Brown", 120, 90, 50, 150, 14, 15, story.TextSpeed.Slow)
    story.printDialog("Pink", 120, 90, 50, 150, 3, 15, story.TextSpeed.Slow)
    story.printCharacterText("But during the invasion of the null space 3 heroes arose", "Narrator")
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb
        `)
    story.printDialog("Gold", 120, 90, 50, 150, 11, 15, story.TextSpeed.Slow)
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        4455444422244454455444422244445544442224445445544442224444455444422244454455444422244445544442224445445544445544442224445445544442224444554444222444544554444222
        4444554222244444444554222244444455422224444444455422224444444554222244444444554222244444455422224444444455444455422224444444455422224444445542222444444445542222
        2224454224455542224454224455222445422445554222445422445552224454224455542224454224455222445422445554222445222445422445554222445422445522244542244555422244542244
        2424454224555522424454224555242445422455552242445422455552424454224555522424454224555242445422455552242445242445422455552242445422455524244542245555224244542245
        2224454224455422224454224455222445422445542222445422445542224454224455422224454224455222445422445542222445222445422445542222445422445522244542244554222244542244
        2224554444444442224554444444222455444444444222455444444442224554444444442224554444444222455444444444222455222455444444444222455444444422245544444444422245544444
        2244555442222222244555442222224455544222222224455544222222244555442222222244555442222224455544222222224455224455544222222224455544222222445554422222222445554422
        2245555422422242245555422422224555542242224224555542242222245555422422242245555422422224555542242224224555224555542242224224555542242222455554224222422455554224
        4444445542224454444445542224444444554222445444444554222444444445542224454444445542224444444554222445444444444444554222445444444554222444444455422244544444455422
        4422244554444544422244554444442224455444454442224455444454422244554444544422244554444442224455444454442224442224455444454442224455444444222445544445444222445544
        2222222455555542222222455555222222245555554222222245555552222222455555542222222455555222222245555554222222222222245555554222222245555522222224555555422222224555
        4424224455544454424224455544442422445554445442422445554444424224455544454424224455544442422445554445442422442422445554445442422445554444242244555444544242244555
        5422244455422255422244455422542224445542225542224445542225422244455422255422244455422542224445542225542224542224445542225542224445542254222444554222554222444554
        5444455554242245444455554242544445555424224544445555424225444455554242245444455554242544445555424224544445544445555424224544445555424254444555542422454444555542
        5555554442424245555554442424555555444242424555555444242425555554442424245555554442424555555444242424555555555555444242424555555444242455555544424242455555544424
        5554444222242445554444222242555444422224244555444422224245554444222242445554444222242555444422224244555444555444422224244555444422224255544442222424455544442222
        4455444422244445445544442224445544442224444544554444222444455444422244445445544442224445544442224444544554445544442224444544554444222444554444222444454455444422
        4444554222244454444455422224444455422224445444445542222444444554222244454444455422224444455422224445444445444455422224445444445542222444445542222444544444554222
        2224454224455554222445422445222445422445555422244542244552224454224455554222445422445222445422445555422244222445422445555422244542244522244542244555542224454224
        2424454224555542242445422455242445422455554224244542245552424454224555542242445422455242445422455554224244242445422455554224244542245524244542245555422424454224
        2224454224455442222445422445222445422445544222244542244552224454224455442222445422445222445422445544222244222445422445544222244542244522244542244554422224454224
        2224554444444424222455444444222455444444442422245544444442224554444444424222455444444222455444444442422245222455444444442422245544444422245544444444242224554444
        2244555442222222224455544222224455544222222222445554422222244555442222222224455544222224455544222222222445224455544222222222445554422222445554422222222244555442
        2245555422422244224555542242224555542242224422455554224222245555422422244224555542242224555542242224422455224555542242224422455554224222455554224222442245555422
        4444445542224445444444554222444444554222444544444455422244444445542224445444444554222444444554222444544444444444554222444544444455422244444455422244454444445542
        4422244554444554442224455444442224455444455444222445544444422244554444554442224455444442224455444455444222442224455444455444222445544444222445544445544422244554
        2222222455555554222222245555222222245555555422222224555552222222455555554222222245555222222245555555422222222222245555555422222224555522222224555555542222222455
        4424224455544455442422445554442422445554445544242244555444424224455544455442422445554442422445554445544242442422445554445544242244555444242244555444554424224455
        5422244455422245542224445542542224445542224554222444554225422244455422245542224445542542224445542224554222542224445542224554222444554254222444554222455422244455
        5445544442224444544445555424544554444222444454444555542425445544442224444544445555424544554444222444454444544554444222444454444555542454455444422244445444455554
        4444455422224445555555444242444445542222444555555544424244444455422224445555555444242444445542222444555555444445542222444555555544424244444554222244455555554442
        4222445422445555544554444222422244542244555554455444422244222445422445555544554444222422244542244555554455422244542244555554455444422242224454224455555445544442
        2242445422455554444445542222224244542245555444444554222242242445422455554444445542222224244542245555444444224244542245555444444554222222424454224555544444455422
        2222445422445544422244542244222244542244554442224454224452222445422445544422244542244222244542244554442224222244542244554442224454224422224454224455444222445422
        4222455444444442224244542245422245544444444222424454224554222455444444442224244542245422245544444444222424422245544444444222424454224542224554444444422242445422
        2224455544222222222244542244222445554422222222224454224452224455544222222222244542244222445554422222222224222445554422222222224454224422244555442222222222445422
        4224555542242224422245544444422455554224222442224554444444224555542242224422245544444422455554224222442224422455554224222442224554444442245555422422244222455444
        5444444554222444222445554422544444455422244422244555442225444444554222444222445554422544444455422244422244544444455422244422244555442254444445542224442224455544
        4442224455444455422455554224444222445544445542245555422424442224455444455422455554224444222445544445542245444222445544445542245555422444422244554444554224555542
        4222222245555555544444455422422222224555555554444445542224222222245555555544444455422422222224555555554444422222224555555554444445542242222222455555555444444554
        5442422445554445444222445544544242244555444544422244554445442422445554445444222445544544242244555444544422544242244555444544422244554454424224455544454442224455
        5542224445542224422222224555554222444554222442222222455555542224445542224422222224555554222444554222442222554222444554222442222222455555422244455422244222222245
        4544445555424224544242244555454444555542422454424224455544544445555424224544242244555454444555542422454424454444555542422454424224455545444455554242245442422445
        4555555444242424554222444554455555544424242455422244455424555555444242424554222444554455555544424242455422455555544424242455422244455445555554442424245542224445
        `)
    story.printDialog("Lava", 120, 90, 50, 150, 2, 4, story.TextSpeed.Slow)
    scene.setBackgroundImage(img`
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        2222222222222222222222222222222222222222244444444444444444444444444444444444444455555555555555555555555555555555555577777777777777777777777777777777777777777777
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        88888888888888888888888888888888888888888aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee33333333333333333333333333333333333333333333
        fff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888f
        aaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafff
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa
        aaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaa
        afffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaaf
        faf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaa
        ffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8f
        ffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafff
        fcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaa
        8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa
        88888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc8
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        fff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888f
        aaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafff
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa
        aaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaa
        afffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaaf
        faf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaa
        ffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8f
        ffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafff
        fcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaa
        8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa8888cfaa
        88888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc888888cc8
        8888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888888
        f8888ffff8888ffff8888ffff8888f88f8888ffff8888ffff8888ffff8888f88f8888ffff8888ffff8888ffff8888f88f8888ffff8888ffff8888ffff8888f88f8888ffff8888ffff8888ffff8888f88
        aaafffaaaaafffaaaaafffaaaaaffffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff8888ffff888fff8888ffff8888ffff8888ffff8fff8888f
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafffaaaaafaaaaafffaaaaafffaaaaafffaaaaaaaaafff
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaa1aaaaaaaa1aaaaaa1aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaafaaaaaaafaaaaaaafaaaaaaafaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaaaa1aaaaaa1aaaaaaaa1aaaaaa1aaaa1aaaaaa1
        ffaaafafffaaafafffaaafafffaaafaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaaaafaaaaafaaaaaaafaaaaaaafaaaaaaaaaaafaa
        f8faaafaf8faaafaf8faaafaf8faaaafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafafffaaafffaaafafffaaafafffaaafafffafffaaaf
        ffff8fffffff8fffffff8fffffff8ffaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8faaafaf8fafaf8faaafaf8faaafaf8faaafaf8faf8faaa
        ffafffffffafffffffafffffffafffffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffff8fffffffffffff8fffffff8fffffff8fffffffffff8f
        ccffaafcccffaafcccffaafcccffaaffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffffafffffafffffffafffffffafffffffffffafff
        88cfaa8888cfaa8888cfaa8888cfaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccffaafcccfffcccffaafcccffaafcccffaafcccfcccffaa
        `)
    story.printDialog("And Lastly the most powerful hero cosmic", 90, 90, 50, 150, 10, 8, story.TextSpeed.Slow)
    story.printCharacterText("But soon after they disappeared", "Narrator")
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99d99bbbbb4fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99dd5dd66168b4444449ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff88855555d66888111444444b99fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8866dd55556688811818444444bb499fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffdd68ddd5556661888188881881844444be9fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffddd93dd356dbd6888888888888888844444499fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffd33d8333333dbb668886888888444444444444449ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffd33388333933d3886688888844444444444444444469ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffd3338883393333338888888884444bbb448b44444444449fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffd333888333333333888888888cbb4be8bbbcb44444bb444b9ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9333888333333333388888888bccb888888bbbbb88888b44444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffd333888339333333833888868bbbbb8888888ccc888b88bb48444ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffd3339d88ddd333338838888688bbcb888888888bc888bcc8b488649fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff333333ddd9333338883888888888a8888b88888888888cc8444886c9ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffd333333dd39333333338688888888a8bbdbbebb8888888888b448c86c9fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff933d3ddd3333333333888688868888ddddddddde8888888888b44bbccccfffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff9d338dd333333333338838888888bdddddd5d55dd22222d88b8eb44bbbbc9ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffdd88888333333333338838888888bddddd55555d555222222b8bbb4448bbb9fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff8dd88883393833333333338888bbbddddd555dd55555555522228b444bb8bbcfffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff8d888883333833333338388888bbddd5555d55555555555222222abb44488bc9ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888888333883393338838868bbddddd555d5555555555552b222aab444488c6ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff888886683338333933d8838666bdd555dd55d555555555555222222aabb4448869fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff8888886688338333333d3388668bdd55d555555555555555552222222aab4444866fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff8dd888668833333333333388668bddd55555555555555555552222222aaabb444669ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff888888668d39333333333388868bdd555d555555555555555522222222aaabb44a69ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff88888886ddd39333333388888868dd5dd555555555555555555222222222aaaaaaa66ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff888888869ddd333933338868888855555555555555555555555522b22222aaaaaaaa69fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff88888866ddddd339333388888888555555555555555555555552b222222222aaaaaa69fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8887788666dddd33333333388868885555555555555555555555222222222222aaaaaa9fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff88777786669333333333388888688855555555555555555555552b22222222222aaaaa6fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8877d776669383333333388888688885555555555555555555522b22222222222aaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff88d7777766938333333333388868688885555e5aaa55555555522222222222222aaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff88777777e693833333333388888888888888888aaaa555555552222222222222aaaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff877777cc7733833333333388888688888888888daaae555555522222222222bbaaaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8777777777738883333388668886888888dd88dbbdaa555555522222222222ebaaaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff877777777777888833338868888888888ddddbbbbdaac55555555222222222aaaaaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8e7777777777778833333388888888888888ddbbbbaaa55555555222222222aaaaaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff877777777777777333333888866888888888dddddbddaa555555222222222aaaaaaaabb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff77777777777777773333388888888888888888daaaaaaa555555222222222aaaaaaaabb9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8d77777777777777b3333888688888888888888aaaaaaaa55555222222222aaaaaaaaab9ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff8d7777777777777bb3333338888888888888888aaaaaaa555522222222222aaaaaaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff877777777777777b33333338888888888888888aaaaaaa55552222222222aaaaaaaaaa69ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff87777777777777bb33333338888888888888888aaaaaaa55552222222222aaaaaaaaaa6fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff88777777777777b333333888888888888888888aaaaaaa55552b22222222aaaaaaaaaa6fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff88d7777777777b333333888888888888888888aaaaaaa55555222222222aaaccaaaa69fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff88d77777777777333333838868888888888888aaaaaaa5555222222222aaaaccaaaa69fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff888777777777b7333333338868888888888888aaaaaaa555522222222aaaaaddaaaa6ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff86877777777773933333333868886888888888aaaaaaa55552222222aaaaabdaaaaa6ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff8877777777773935533888888886888888888aaaaaaa55522222222aaaabbdaaaa69ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff888877777779333d555888888888888888888aaaaaaacc522222222aaaabcaaaaa6fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff6887777777933933555888888888888888888aaaaaaa555522222aaaaabccaaa69fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff8888777777333333d55dd8888888888888888aaaaaaa55222222aaaaaaaaaaa669fffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff8688d7777733333333556d888888888888888aaaaaaa55222222aaaaaaaaaaa69ffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff96867777733333333d55d688686888888888aaaaaaa5525222aaaaaaaaaad669ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff888e77777333333333dbb88688886888888aaaaaaaa555222aaaaaaaaa9b69fffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff8687777733993333333bbb8688888888888aaaaaaaa5552aaaaaaaaaaaab6ffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff9677777933933333333bb8688666888888aaaaaaaaa5aaaaaaaaaaaaa699ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff9977b7993333333333dbb688866888888aaaaaaaaaaaaaaaaaaaaaaa69fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffff96977b9333333333333dbb88866888888aaaaaaaaaaaaaaaaaaaaaa69ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff9697773393333333333dd888866888888aaaaaaaaaaaaaaaaaaaa66fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff969779339333933d33dd888886888888aaaaaaaaaaaaabbaaaa669fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff9677733399339dddd88886888888888aaaaaaaaaaaaabeaaa669ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff96733339933333dd88886666668888aaaaaaaaaaaaddaaa669fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff96933339933ddd383886868888888aaaaaaaaaaaadaaa669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff9693333933333333886868888888aaaaaaaaaaaaaa669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff993393393333333388688888888aaaaaa6aaaaaa669fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9399993333333888888888888aaaaaa11aaaa699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff96999333333888888118888aaaaaa1aaa669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9969993333888818188888aaaa1aa6669ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99611311866188111888a6116699ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff99131111611118111666699fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9999661166669999ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff999999999fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    story.printCharacterText("Still the world had peace", "Narrator")
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff55555555544444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333355555555544444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333335555555554444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333555555555444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333355555555544444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333355555555444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333335555555544444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333333355555555444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333333333555555554444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff333333333333333335555555444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff33333333333333333355555554444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff3333333333333333333555555544444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff33333333333333333335555555444444444444444444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff83333333333333333333355555554444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff83333333333333333333355555554444444444444444444444444444444fffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff8833333333333333333333555555544444454552222222444444444444444ffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff888333333333333333333385555544444445522d2222222244222244444444fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff888833333333333333333388555554444455552222222222222222224444444fffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff8888333333333333333333885555544555555522222222222222222224444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff88888333333333333333338885555555555555522222222222222222222444444ffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff888883333333333333333388855555555555555222222222222222222222444444fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff8888883333333333333333388855555555555555522222222222222222222224444fffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff88888833333333333333338888555555555555555222222222222222222222224444ffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff88888833333333333333338888555555555555555222222222222222222222224444ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff888888833333333333333388888555555555555555222222222222222222222222444ffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8888888333333333333338888885555555555555552222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff8888888333333333338888888888555555555555552222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff88877888333333333338888888888855555555555555222222222222222222222222222fffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff887777883333333333388888888888555555555555552222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff877777788333333333388888888888555555555555552222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff877777778333333333888888888888855555555555552222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff877777777773333333888888888888888555555555552222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777773333333888888888888888855555555555222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777773333333888888888888888888555555555222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777773333333888888888888888888855555552222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777733333888888888888888888885555552222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777333888888888888888888222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777733888888888888888888222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff7777777777777777b3888888888888888888222222222222222222222222222222222222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777bb3888888888888888222222222222222222222222222222222aa2222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777733388888888888882222222222222222222222222222222222aa2222ffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777733388888888888882222222222222222222222222222222222aaaaafffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777733388888888888882222222222222222222222222222222222aaaaafffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777773388888888888888822222222222222222222222222222222aaaaafffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777773388888888888888882222222222222222222222222222222aaaaafffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff777777777777777773888888888888888888222222222222222222222222222222aaaaafffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffff7777777777777777738888888888888888888222222222222222222222222222aaaaaaafffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffff777777777777777738888888888888888888882222222222222222222222222aaaaaaafffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff7777777777777773888888888888888888888a222222222222222222222222aaaaafffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffff77777777777777738888888888888888888888a222222222222222222222aaaaaaafffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff7777777777777733888888888888888888888aa22222222222222222222aaaaaaafffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffff7777777777777733388888888888888888888aaa2222222222222222aaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffff777777777777733388888888888888888888aaaa22222222222222aaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff777777777777333338888888888888eeeeeeeaaa2222222222222aaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff7777777773333333333888888888eeeeeeeeeeaaaa2222222222aaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffff777777777333333333338888888eeeeeeeeeeeaaaaa22222222aaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff7777777733333333333888888eeeeeeeeeeeeaaaaa22222222aaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffff7777777733333333333388888eeeeeeeeeeeeaaaaa222222aaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffff3337773333333333333eeeeeeeeeeeeeeeeaaaaa222222aaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffff333733333333333333eeeeeeeeeeeeeeaaaaaaaaa222aaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffff33733333333333333eeeeeeeeeeeeeeaaaaaaaaaa22aaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333333333eeeeeeeeeeeeeeaaaaaaaaa2aaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff333333333333eeeeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333333eeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffff333333333333333eeeeeeeeeeeeeaaaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333333eeeeeeeeeeeeeaaaaaaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333333eeeeeeeeeeeeeaaaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff3333333333eeeeeeeeeeeeeaaaaaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333333eeeeeeeeeeeeeaaaaaaaaaaaaffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff33333eeeeeeeeeeeeeaaaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeeeeaaaaaaafffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffeeeeeeeeeeeffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        `)
    story.printCharacterText("But then the red nation attacked and allying with colors similar to red waged an all out war on other colors", "Narrator")
    scene.setBackgroundImage(img`
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffff11111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111111111111111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
        ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
        ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
        ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
        ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
        ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
        ffffffffffff111111111111111111111111111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111fffffffffffffffff11111111ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffffffffff11111ffffffffffffff
        ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
        ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
        ffffffffffff11111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111ffffffffffffff
        `)
    story.printCharacterText("Now only you the chosen warrior can put and end to this war", "Narrator")
    color.FadeToBlack.startScreenEffect(2000)
    pause(5000)
    Race_Select()
    color.startFadeFromCurrent(color.originalPalette)
    color.pauseUntilFadeDone()
}
function Red_tutorial () {
    if (blockSettings.readNumber("Checkpoint") == 1) {
    	
    } else if (blockSettings.readNumber("Checkpoint") == 2) {
    	
    } else if (blockSettings.readNumber("Checkpoint") == 3) {
    	
    }
}
function Tutorial () {
    if (blockSettings.readNumber("Race") == 1) {
        Blue_tutorial()
    } else if (blockSettings.readNumber("Race") == 2) {
        Green_tutorial()
    } else if (blockSettings.readNumber("Race") == 3) {
        Red_tutorial()
    }
}
let myMenu: miniMenu.MenuSprite = null
let Race_Select2: miniMenu.MenuItem[] = []
let textSprite: TextSprite = null
scene.setBackgroundImage(assets.image`Start Image`)
textSprite = textsprite.create("Untitled", 15, 1)
textSprite.setMaxFontHeight(10)
textSprite.setPosition(80, 30)
if (blockSettings.exists("Have Played the game before")) {
    if (blockSettings.exists("Have Completed The game")) {
        textSprite.setOutline(1, 11)
        textSprite.setBorder(1, 11)
    } else if (!(blockSettings.exists("Have Completed The game"))) {
        if (blockSettings.readNumber("Race") == 1) {
            textSprite.setOutline(1, 8)
            textSprite.setBorder(1, 8)
        } else if (blockSettings.readNumber("Race") == 2) {
            textSprite.setOutline(1, 7)
            textSprite.setBorder(1, 7)
        } else if (blockSettings.readNumber("Race") == 3) {
            textSprite.setOutline(1, 2)
            textSprite.setBorder(1, 2)
        }
    }
} else if (!(blockSettings.exists("Have Played the game before"))) {
    textSprite.setOutline(1, 6)
    textSprite.setBorder(1, 6)
}
if (blockSettings.exists("Have Played the game before")) {
	
} else if (!(blockSettings.exists("Have Played the game before"))) {
    blockSettings.writeString("Game Difficulty", "Normal")
}
let Wave_time = statusbars.create(0, 0, StatusBarKind.Waves_Time)
Wave_time.value = 0
let Attack_Speed_Multiplier = statusbars.create(0, 0, StatusBarKind.Health)
Attack_Speed_Multiplier.value = 0
let Enemy_Attack_Multiplier = statusbars.create(0, 0, StatusBarKind.Health)
Enemy_Attack_Multiplier.value = 0
let Attack_Multiplier = statusbars.create(0, 0, StatusBarKind.Health)
Attack_Multiplier.value = 0
let Enemy_Speed_Multiplier = statusbars.create(0, 0, StatusBarKind.Health)
Enemy_Speed_Multiplier.value = 0
if (blockSettings.readString("Game Difficulty") == "Easy") {
    Wave_time.value = 10000
    Attack_Speed_Multiplier.value = 3
    Enemy_Attack_Multiplier.value = 1
    Attack_Multiplier.value = 2
    Enemy_Speed_Multiplier.value = 1
} else if (blockSettings.readString("Game Difficulty") == "Normal") {
    Wave_time.value = 5000
    Attack_Speed_Multiplier.value = 1
    Enemy_Attack_Multiplier.value = 1
    Attack_Multiplier.value = 1
    Enemy_Speed_Multiplier.value = 1
} else if (blockSettings.readString("Game Difficulty") == "Hard") {
    Wave_time.value = 5000
    Attack_Speed_Multiplier.value = 1
    Enemy_Attack_Multiplier.value = 2
    Attack_Multiplier.value = 1
    Enemy_Speed_Multiplier.value = 2
} else if (blockSettings.readString("Game Difficulty") == "???") {
	
}
let PRESS_START = textsprite.create("Press A to Start", 0, 1)
PRESS_START.setPosition(80, 80)
pauseUntil(() => controller.A.isPressed())
sprites.destroyAllSpritesOfKind(SpriteKind.Text, effects.spray, 500)
pause(500)
if (blockSettings.exists("Have Played the game before")) {
    if (blockSettings.readString("World") == "Tutorial") {
        Tutorial()
    } else {
        Main_menu()
    }
} else if (!(blockSettings.exists("Have Played the game before"))) {
    color.FadeToBlack.startScreenEffect(5000)
    pause(5000)
    color.startFadeFromCurrent(color.originalPalette)
    Intro()
}
