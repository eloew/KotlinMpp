//
//  ViewController.swift
//  KotlinMpp
//
//  Created by Eric Loew on 9/16/19.
//  Copyright © 2019 erl. All rights reserved.
//

import UIKit
import SharedCode

class ViewController: UIViewController, MainView {

    @IBOutlet weak var sharedCodeMessage: UILabel!
    @IBOutlet weak var ktorMessage: UILabel!
    @IBOutlet weak var activityIndicator: UIActivityIndicatorView!
    
    
    //MARK: - Api
    

    lazy var adapter: NativeViewModel = NativeViewModel(
        viewUpdate: { [weak self] summary in
            self?.viewUpdate(message: summary)
        }, errorUpdate: { [weak self] errorMessage in
            self?.errorUpdate(for: errorMessage)
        }
    )
    
    //MARK: Override
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
        
        /*
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: 300, height: 21))
        label.center = CGPoint(x: 160, y: 285)
        label.textAlignment = .center
        label.font = label.font.withSize(25)
        label.text = CommonKt.createApplicationScreenMessage()
        view.addSubview(label)
        */
        
        sharedCodeMessage.text = CommonKt.createApplicationScreenMessage()
        
        ktorMessage.text = "Waiting on ktor..."
        activityIndicator.startAnimating()
        adapter.getKtorMessage(message: "Ktor Rocks on iOS")
        
    }

    private func viewUpdate(message: String) {
        print("response message: \(message)")
        ktorMessage.text = message
        activityIndicator.stopAnimating()
    }
    
     private func errorUpdate(for errorMessage: String) {
        print("MainView.showError String: \(errorMessage)")
        ktorMessage.text = errorMessage
        activityIndicator.stopAnimating()
    }
    
    //MARK: - MainView
    func showApplicationScreenMessage(response: MessageResponse) {
        print("response message: \(response.message)")
        ktorMessage.text = response.message
        activityIndicator.stopAnimating()
    }
    
    func showError(error: KotlinThrowable) {
        let message = error.message ?? ""
        print("MainView.showError KotlinThrowable: \(message)")
        ktorMessage.text = message
        activityIndicator.stopAnimating()
    }
    
    func showError(message: String) {
        print("MainView.showError String: \(message)")
        ktorMessage.text = message
        activityIndicator.stopAnimating()
    }
}

