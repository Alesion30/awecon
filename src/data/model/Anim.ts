export interface Anim {
    status: string
    entering: boolean // Started to be shown.
    entered: boolean // Animation is completed and now is shown.
    exiting: boolean // Started to be hidden.
    exited: boolean // Animation is completed and now is hidden.
}
