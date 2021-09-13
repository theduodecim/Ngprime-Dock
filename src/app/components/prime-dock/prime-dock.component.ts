import { Component, OnDestroy, OnInit } from '@angular/core';
import { MenuItem, MessageService , } from 'primeng/api';
import { Subscription } from 'rxjs';
import { TerminalService } from 'primeng/terminal';
import { NodeService } from 'src/app/node-service';

@Component({
  selector: 'app-prime-dock',
  templateUrl: './prime-dock.component.html',
  styleUrls: ['./prime-dock.component.scss'],
  providers: [MessageService, TerminalService, ]
})
export class PrimeDockComponent implements OnInit, OnDestroy {
 public dockItems!: MenuItem[];
 displayTerminal: boolean;

 displayFinder: boolean;

 displayGalleria: boolean;

 dockBasicItems: MenuItem[];


 menubarItems: any[];

 responsiveOptions: any[];

 images: any[];

 nodes: any[];

 subscription: Subscription;

 constructor(
 // private galleriaService: PhotoService,
  // private nodeService: NodeService, 
  private messageService: MessageService,
  private terminalService: TerminalService
  ) { }

  ngOnInit(): void {
    this.dockBasicItems = [
      {
          label: 'Finder',
          icon: "assets/showcase/images/dock/finder.svg"
      },
      {
          label: 'App Store',
          icon: "assets/showcase/images/dock/appstore.svg"
      },
      {
          label: 'Photos',
          icon: "assets/showcase/images/dock/photos.svg"
      },
      {
          label: 'Trash',
          icon: "assets/showcase/images/dock/trash.png"
      }
  ];

  this.dockItems = [
      {
          label: 'Finder',
          tooltipOptions: {
              tooltipLabel: "Finder",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/images/dock/finder.svg",
          command: () => {
              this.displayFinder = true;
          }
      },
      {
          label: 'Terminal',
          tooltipOptions: {
              tooltipLabel: "Terminal",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/images/dock/terminal.svg",
          command: () => {
              this.displayTerminal = true;
          }
      },
      {
          label: 'App Store',
          tooltipOptions: {
              tooltipLabel: "App Store",
              tooltipPosition: 'top',
              positionLeft: 15,
              positionTop: -15
          },
          icon: "assets/showcase/images/dock/appstore.svg",
          command: () => {
              this.messageService.add({severity: 'error', summary: 'An unexpected error occurred while signing in.', detail: 'UNTRUSTED_CERT_TITLE'});
          }
      },
      {
          label: 'Safari',
          tooltipOptions: {
              tooltipLabel: "Safari",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/images/dock/safari.svg",
          command: () => {
              this.messageService.add({severity: 'warn', summary: 'Safari has stopped working'});
          }
      },
      {
          label: 'Photos',
          tooltipOptions: {
              tooltipLabel: "Photos",
              tooltipPosition: 'top',
              positionTop: -15,
              positionLeft: 15
          },
          icon: "assets/showcase/images/dock/photos.svg",
          command: () => {
              this.displayGalleria = true
          }
      },
      {
          label: 'GitHub',
          icon: "assets/showcase/images/dock/github.svg",
      },
      {
          label: 'Trash',
          icon: "assets/showcase/images/dock/trash.png",
          command: () => {
              this.messageService.add({severity: 'info', summary: 'Empty Trash'});
          }
      }
  ];

  this.menubarItems = [
      {
          label: 'Finder',
          className: 'menubar-root'
      },
      {
          label: 'File',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-plus',
                  items: [
                      {
                          label: 'Bookmark',
                          icon: 'pi pi-fw pi-bookmark'
                      },
                      {
                          label: 'Video',
                          icon: 'pi pi-fw pi-video'
                      },

                  ]
              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-trash'
              },
              {
                  separator: true
              },
              {
                  label: 'Export',
                  icon: 'pi pi-fw pi-external-link'
              }
          ]
      },
      {
          label: 'Edit',
          items: [
              {
                  label: 'Left',
                  icon: 'pi pi-fw pi-align-left'
              },
              {
                  label: 'Right',
                  icon: 'pi pi-fw pi-align-right'
              },
              {
                  label: 'Center',
                  icon: 'pi pi-fw pi-align-center'
              },
              {
                  label: 'Justify',
                  icon: 'pi pi-fw pi-align-justify'
              },

          ]
      },
      {
          label: 'Users',
          items: [
              {
                  label: 'New',
                  icon: 'pi pi-fw pi-user-plus',

              },
              {
                  label: 'Delete',
                  icon: 'pi pi-fw pi-user-minus',

              },
              {
                  label: 'Search',
                  icon: 'pi pi-fw pi-users',
                  items: [
                      {
                          label: 'Filter',
                          icon: 'pi pi-fw pi-filter',
                          items: [
                              {
                                  label: 'Print',
                                  icon: 'pi pi-fw pi-print'
                              }
                          ]
                      },
                      {
                          icon: 'pi pi-fw pi-bars',
                          label: 'List'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Events',
          items: [
              {
                  label: 'Edit',
                  icon: 'pi pi-fw pi-pencil',
                  items: [
                      {
                          label: 'Save',
                          icon: 'pi pi-fw pi-calendar-plus'
                      },
                      {
                          label: 'Delete',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              },
              {
                  label: 'Archieve',
                  icon: 'pi pi-fw pi-calendar-times',
                  items: [
                      {
                          label: 'Remove',
                          icon: 'pi pi-fw pi-calendar-minus'
                      }
                  ]
              }
          ]
      },
      {
          label: 'Quit'
      }
  ];

  this.responsiveOptions = [
      {
          breakpoint: '1024px',
          numVisible: 3
      },
      {
          breakpoint: '768px',
          numVisible: 2
      },
      {
          breakpoint: '560px',
          numVisible: 1
      }
  ];



  this.subscription = this.terminalService.commandHandler.subscribe(command => this.commandHandler(command));

 // this.galleriaService.getImages().then(data => this.images = data);
  // this.nodeService.getFiles().then(data => this.nodes = data);
  }

  commandHandler(text) {
    let response;
    let argsIndex = text.indexOf(' ');
    let command = argsIndex !== -1 ? text.substring(0, argsIndex) : text;

    switch (command) {
        case 'date':
            response = 'Today is ' + new Date().toDateString();
            break;

        case 'greet':
            response = 'Hola ' + text.substring(argsIndex + 1) + '!';
            break;

        case 'random':
            response = Math.floor(Math.random() * 100);
            break;

        case 'clear':
            response = null;
            break;

        default:
            response = 'Unknown command: ' + command;
            break;
    }

    if (response) {
        this.terminalService.sendResponse(response);
    }
    else {
        this.terminalService.sendResponse(response);
    }
}

ngOnDestroy() {
  if (this.subscription) {
      this.subscription.unsubscribe();
  }
}

}
